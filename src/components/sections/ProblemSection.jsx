import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

function ProblemSection() {
  const { problem } = siteConfig;

  return (
    <section
      id="problema"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.16] to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/[0.045] blur-3xl" />

      <Reveal className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeader
          eyebrow={problem.eyebrow}
          title={problem.title}
          className="max-w-2xl"
        />

        <div className="space-y-7">
          <div className="max-w-2xl space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>{problem.description}</p>
            <p className="text-slate-400">{problem.secondaryText}</p>
          </div>

          <ol
            className="flex flex-col border-l border-white/[0.14] pl-4 sm:flex-row sm:items-center sm:border-b sm:border-l-0 sm:pb-4 sm:pl-0"
            aria-label="Secuencia del problema"
          >
            {problem.sequence.map((step, index) => (
              <li
                className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center"
                key={step}
              >
                <div className="flex min-w-0 items-baseline gap-2 py-2 sm:py-0">
                  <span className="shrink-0 text-[0.65rem] font-semibold tracking-[0.16em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-5 text-slate-300">
                    {step}
                  </span>
                </div>

                {index < problem.sequence.length - 1 && (
                  <div
                    className="flex h-8 items-center sm:mx-3 sm:h-auto sm:min-w-3"
                    aria-hidden="true"
                  >
                    <span className="-ml-[1.15rem] mt-7 rotate-90 bg-black px-1 text-xs text-slate-600 sm:ml-0 sm:mt-0 sm:rotate-0 sm:px-0">
                      →
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

export default ProblemSection;
