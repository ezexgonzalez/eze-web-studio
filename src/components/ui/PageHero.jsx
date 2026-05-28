function PageHero({
  eyebrow,
  title,
  description,
  className = "",
  layout = "stacked",
}) {
  if (layout === "split") {
    return (
      <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16 ${className}`}>
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>

        <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
        {eyebrow}
      </p>
      <h1 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default PageHero;
