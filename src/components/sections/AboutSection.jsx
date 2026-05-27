import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

function AboutSection() {
  const { about } = siteConfig;

  return (
    <section
      id="sobre-eze"
      className="relative isolate overflow-hidden bg-black px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-3xl" />

      <Reveal className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 h-px w-20 bg-cyan-300/70 shadow-[0_0_18px_rgba(34,211,238,0.22)]" />

          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {about.eyebrow}
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-[2.65rem]">
            {about.editorialTitle}
          </h2>

          <div className="mx-auto mt-7 max-w-2xl space-y-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{about.editorialDescription}</p>
            <p className="text-slate-400">{about.editorialSecondaryText}</p>
          </div>

          <p className="mx-auto mt-10 max-w-2xl border-y border-white/[0.08] py-5 text-sm font-medium leading-6 text-cyan-100/90 sm:text-base">
            {about.principles}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default AboutSection;
