function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/[0.12] bg-white/[0.06] shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;
