// Animated aurora blobs used behind the hero. Pure CSS animation (see globals.css).
export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,108,255,0.35), transparent 60%)",
          animation: "aurora-move 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-10 -right-20 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.28), transparent 60%)",
          animation: "aurora-move 18s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute -bottom-24 -left-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,193,0.22), transparent 60%)",
          animation: "aurora-move 16s ease-in-out infinite",
        }}
      />
    </div>
  );
}
