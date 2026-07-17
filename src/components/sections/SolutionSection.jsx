import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

function SolutionSection() {
  const { solution } = siteConfig;

  return (
    <section
      id="solucion"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute right-0 top-10 -z-10 h-72 w-72 translate-x-1/3 rounded-full bg-cyan-300/[0.055] blur-3xl" />

      <Reveal className="mx-auto grid w-full max-w-7xl gap-y-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-16">
        <p className="inline-flex w-fit rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95 lg:col-start-1 lg:row-start-1">
          {solution.eyebrow}
        </p>

        <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:col-start-1 lg:row-start-2 lg:text-5xl">
          {solution.title}
        </h2>

        <div className="mt-5 max-w-2xl lg:col-start-2 lg:row-start-2 lg:mt-0">
          <div className="space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{solution.description}</p>
            <p className="border-l border-cyan-300/40 pl-4 font-semibold text-cyan-100">
              {solution.strongPhrase}
            </p>
          </div>

          <div className="mt-8 grid justify-items-center md:grid-cols-[minmax(0,1fr)_5rem_auto_3rem_auto] md:items-center md:justify-items-stretch">
            <ul className="w-full space-y-3 text-center md:text-right">
              {solution.flow.inputs.map((input, index) => (
                <li
                  className={`text-sm text-slate-400 sm:text-base ${
                    index === 0 ? "md:pr-6" : index === 1 ? "md:pr-3" : ""
                  }`}
                  key={input}
                >
                  {input}
                </li>
              ))}
            </ul>

            <div className="relative h-20 w-px bg-white/[0.14] md:h-28 md:w-20 md:bg-transparent" aria-hidden="true">
              <span className="absolute right-0 top-1/2 hidden h-px w-[5.3rem] origin-right -translate-y-1/2 rotate-[19deg] bg-white/[0.14] md:block" />
              <span className="absolute right-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-white/[0.14] md:block" />
              <span className="absolute right-0 top-1/2 hidden h-px w-[5.3rem] origin-right -translate-y-1/2 -rotate-[19deg] bg-white/[0.14] md:block" />
            </div>

            <p className="min-w-36 py-2 text-center text-sm font-semibold text-cyan-100 sm:text-base md:py-0">
              {solution.flow.center}
            </p>

            <div className="h-16 w-px bg-cyan-300/70 md:h-px md:w-full" aria-hidden="true" />

            <p className="max-w-40 text-center text-sm font-semibold leading-5 text-cyan-100 sm:text-base md:pl-3 md:text-left">
              {solution.flow.result}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;
