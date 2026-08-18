"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/lib/data";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!values.email.trim()) next.email = "Please add your email.";
    else if (!EMAIL_RE.test(values.email)) next.email = "That email looks off.";
    if (!values.message.trim()) next.message = "Say something 🙂";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    // NOTE: client-only — opens the visitor's mail app pre-filled.
    // TODO: swap for a real backend/Formspree endpoint to collect messages.
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  function field(name: keyof typeof values) {
    return {
      value: values[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((v) => ({ ...v, [name]: e.target.value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
      },
    };
  }

  const inputBase =
    "w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/60 focus:bg-black/30";

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="grid min-h-[340px] place-items-center text-center"
        >
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-2xl text-black"
            >
              ✓
            </motion.div>
            <h3 className="mt-5 text-xl font-semibold">Your mail app is open</h3>
            <p className="mt-2 text-sm text-muted">
              Hit send there and I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setValues({ name: "", email: "", message: "" });
              }}
              className="mt-6 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Send another
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted">
              Name
            </label>
            <input
              {...field("name")}
              placeholder="Ada Lovelace"
              className={`${inputBase} ${errors.name ? "border-rose-500/60" : "border-white/10"}`}
            />
            <FieldError msg={errors.name} />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted">
              Email
            </label>
            <input
              {...field("email")}
              type="email"
              placeholder="you@company.com"
              className={`${inputBase} ${errors.email ? "border-rose-500/60" : "border-white/10"}`}
            />
            <FieldError msg={errors.email} />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted">
              Message
            </label>
            <textarea
              {...field("message")}
              rows={4}
              placeholder="Tell me about your project…"
              className={`${inputBase} resize-none ${errors.message ? "border-rose-500/60" : "border-white/10"}`}
            />
            <FieldError msg={errors.message} />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-black"
          >
            Send message →
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 text-xs text-rose-400"
        >
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
