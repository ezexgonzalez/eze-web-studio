import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

function ProblemSection() {
  const { problem } = siteConfig;
  const pathSteps = problem.sequence.slice(0, -1);
  const consequence = problem.sequence.at(-1);

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

          <div className="mt-8 sm:flex sm:items-start">
            <ol className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center" aria-label="Recorrido del problema">
              {pathSteps.map((step, index) => (
                <li className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center" key={step}>
                  <div className="flex min-w-0 items-baseline gap-2 py-1.5 sm:py-0">
                    <span className="shrink-0 text-[0.65rem] font-semibold tracking-[0.16em] text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium leading-5 text-slate-300">
                      {step}
                    </span>
                  </div>

                  {index < pathSteps.length - 1 && (
                    <div className="ml-2 flex h-7 items-center sm:mx-3 sm:h-auto sm:min-w-5 sm:flex-1" aria-hidden="true">
                      <span className="h-full w-px bg-white/[0.14] sm:h-px sm:w-auto sm:flex-1" />
                      <span className="-ml-[0.3rem] mt-6 rotate-90 bg-black px-1 text-xs text-slate-600 sm:ml-1 sm:mt-0 sm:rotate-0 sm:px-0">
                        →
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-6 flex items-baseline gap-2 sm:ml-10 sm:mt-3 sm:min-w-fit">
              <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-slate-500">
                {String(problem.sequence.length).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-slate-300">{consequence}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ProblemSection;
