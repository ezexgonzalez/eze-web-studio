import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

function SolutionSection() {
  const { solution } = siteConfig;

  return (
    <section
      id="solucion"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute right-0 top-10 -z-10 h-72 w-72 translate-x-1/3 rounded-full bg-cyan-300/[0.055] blur-3xl" />

      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <SectionHeader
            eyebrow={solution.eyebrow}
            title={solution.title}
            className="max-w-2xl"
          />

          <div className="max-w-2xl space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{solution.description}</p>
            <p className="border-l border-cyan-300/40 pl-4 font-semibold text-cyan-100">
              {solution.strongPhrase}
            </p>

            <div className="grid justify-items-center pt-6 md:grid-cols-[minmax(0,1fr)_5rem_auto_3rem_auto] md:items-center md:justify-items-stretch md:pt-8">
              <ul className="w-full space-y-3 text-center md:text-left">
                {solution.flow.inputs.map((input) => (
                  <li className="text-sm text-slate-400 sm:text-base" key={input}>
                    {input}
                  </li>
                ))}
              </ul>

              <div className="relative h-20 w-px bg-white/[0.14] md:h-28 md:w-20 md:bg-transparent" aria-hidden="true">
                <span className="absolute left-0 top-1/2 hidden h-px w-[5.4rem] origin-left -translate-y-1/2 rotate-[32deg] bg-white/[0.14] md:block" />
                <span className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-white/[0.14] md:block" />
                <span className="absolute bottom-1/2 left-0 hidden h-px w-[5.4rem] origin-left translate-y-1/2 -rotate-[32deg] bg-white/[0.14] md:block" />
              </div>

              <div className="flex min-w-28 flex-col items-center gap-2 py-2 text-center text-sm font-semibold text-cyan-100 sm:text-base md:py-0">
                <span className="h-px w-full bg-cyan-300/70" />
                {solution.flow.center}
                <span className="h-px w-full bg-cyan-300/70" />
              </div>

              <div className="h-16 w-px bg-cyan-300/70 md:h-px md:w-full" aria-hidden="true" />

              <p className="max-w-40 text-center text-sm font-semibold leading-5 text-cyan-100 sm:text-base md:pl-3 md:text-left">
                {solution.flow.result}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;
