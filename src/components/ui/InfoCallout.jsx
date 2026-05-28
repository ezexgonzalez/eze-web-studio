import GlassCard from "./GlassCard";

function InfoCallout({
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <GlassCard className={className}>
      {(eyebrow || title || description) && (
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-slate-50 sm:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-base leading-7 text-slate-300">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </GlassCard>
  );
}

export default InfoCallout;
