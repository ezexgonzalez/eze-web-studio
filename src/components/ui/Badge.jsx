function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.055] px-3.5 py-2 text-xs font-medium text-slate-100 shadow-sm shadow-black/20 ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
