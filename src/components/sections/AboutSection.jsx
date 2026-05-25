import { siteConfig } from "../../data/siteConfig";

function AboutSection() {
  const { about } = siteConfig;

  return (
    <section
      id="sobre-eze"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute right-0 top-10 -z-10 h-80 w-80 translate-x-1/4 rounded-full bg-cyan-300/[0.04] blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {about.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
            {about.title}
          </h2>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{about.description}</p>
            <p className="text-slate-400">{about.secondaryText}</p>
          </div>
        </div>

        <div className="relative rounded-3xl border border-cyan-300/[0.16] bg-cyan-300/[0.055] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.38),0_0_40px_rgba(34,211,238,0.055)] backdrop-blur-xl sm:p-8">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
            Criterio visual
          </p>
          <blockquote className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-cyan-50 sm:text-3xl">
            {about.highlightedPhrase}
          </blockquote>
          <div className="mt-8 h-px w-24 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(34,211,238,0.26)]" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
