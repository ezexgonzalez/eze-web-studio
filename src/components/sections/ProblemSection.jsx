import { Fragment } from "react";
import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

function ProblemSection() {
  const { problem } = siteConfig;

  return (
    <section
      id="problema"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.16] to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/[0.045] blur-3xl" />

      <Reveal className="mx-auto grid w-full max-w-7xl gap-y-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-16">
        <p className="inline-flex w-fit rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95 lg:col-start-1 lg:row-start-1">
          {problem.eyebrow}
        </p>

        <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:col-start-1 lg:row-start-2 lg:text-5xl">
          {problem.title}
        </h2>

        <div className="mt-5 lg:col-start-2 lg:row-start-2 lg:mt-0">
          <div className="max-w-2xl space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{problem.description}</p>
            <p className="text-slate-400">{problem.secondaryText}</p>
          </div>

          <ol
            className="mt-8 grid grid-cols-1 items-stretch gap-y-3 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-y-0"
            aria-label="Recorrido del problema"
          >
            {problem.sequence.map((step, index) => (
              <Fragment key={step}>
                <li className="grid min-h-20 min-w-0 grid-rows-[auto_1fr] gap-y-2">
                  <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-5 text-slate-300">
                    {step}
                  </span>
                </li>

                {index < problem.sequence.length - 1 && (
                  <li
                    className="flex min-h-8 items-center justify-center text-xs text-slate-600 md:min-h-20"
                    aria-hidden="true"
                  >
                    <span className="inline-block rotate-90 md:rotate-0">→</span>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

export default ProblemSection;
