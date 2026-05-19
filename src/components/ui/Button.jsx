function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  const variants = {
    primary:
      "bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.22)] hover:bg-cyan-200",
    secondary:
      "border border-white/[0.15] bg-white/[0.04] text-slate-100 hover:border-cyan-300/50 hover:bg-white/[0.07] hover:text-cyan-100",
  };

  return (
    <Component
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
