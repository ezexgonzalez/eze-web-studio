import { siteConfig } from "../../data/siteConfig";

function AboutSection() {
  const { about } = siteConfig;
  const { manifesto } = about;

  return (
    <section
      id="sobre-eze"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute right-0 top-10 -z-10 h-80 w-80 translate-x-1/4 rounded-full bg-cyan-300/[0.04] blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-14">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {about.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-[2.75rem]">
            {about.title}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{about.description}</p>
            <p className="text-slate-400">{about.secondaryText}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 top-8 -z-10 h-56 w-56 rounded-full bg-cyan-300/[0.055] blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/[0.16] bg-white/[0.032] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.4),0_0_44px_rgba(34,211,238,0.055)] backdrop-blur-xl sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/[0.07] blur-3xl" />
            <div className="absolute bottom-0 left-8 h-px w-28 bg-cyan-300/50 shadow-[0_0_18px_rgba(34,211,238,0.24)]" />

            <div className="relative flex items-start justify-between gap-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
                {manifesto.label}
              </p>
              <span className="select-none text-4xl font-semibold leading-none tracking-[-0.04em] text-slate-50/[0.045] sm:text-5xl">
                EZE
              </span>
            </div>

            <h3 className="relative mt-12 max-w-sm text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl">
              {manifesto.title}
            </h3>

            <div className="relative mt-8 h-px w-full bg-gradient-to-r from-cyan-300/70 via-white/[0.08] to-transparent" />

            <div className="relative mt-8 space-y-5">
              {manifesto.principles.map((principle, index) => (
                <div
                  className="grid gap-4 border-b border-white/[0.07] pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[3.5rem_1fr]"
                  key={principle}
                >
                  <span className="text-xs font-semibold text-cyan-200/85">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-medium leading-7 text-slate-200">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-10 flex flex-col gap-3 border-t border-cyan-300/[0.14] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium leading-5 text-slate-400">
                {manifesto.closing}
              </p>
              <span className="h-px w-20 rounded-full bg-cyan-300/60 shadow-[0_0_16px_rgba(34,211,238,0.24)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
