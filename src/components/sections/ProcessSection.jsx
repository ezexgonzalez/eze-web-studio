import { siteConfig } from "../../data/siteConfig";

function ProcessSection() {
  const { process } = siteConfig;

  return (
    <section
      id="proceso"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 translate-x-1/4 rounded-full bg-cyan-300/[0.04] blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
              {process.eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
              {process.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {process.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <article
              className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.028] p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/[0.22] hover:bg-white/[0.048] hover:shadow-[0_0_30px_rgba(34,211,238,0.055)] sm:p-6"
              key={step.title}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold text-cyan-200/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 rounded-full bg-white/[0.12] transition-colors duration-300 group-hover:bg-cyan-300/[0.36]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
