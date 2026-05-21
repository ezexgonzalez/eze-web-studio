function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  const variants = {
    primary:
      "bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.22)] hover:-translate-y-px hover:bg-cyan-200 hover:shadow-[0_0_36px_rgba(34,211,238,0.34)]",
    secondary:
      "border border-white/[0.15] bg-white/[0.04] text-slate-100 hover:-translate-y-px hover:border-cyan-300/60 hover:bg-cyan-300/[0.075] hover:text-cyan-100 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]",
  };

  return (
    <Component
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-[background-color,border-color,box-shadow,color,transform] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
