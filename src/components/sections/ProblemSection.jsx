import { Fragment } from "react";
import {
  FiGrid,
  FiInstagram,
  FiMessageCircle,
  FiUserX,
} from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";

const mobileSteps = [
  {
    icon: FiInstagram,
    itemClassName:
      "col-start-1 col-end-10 row-start-1 rotate-[-3deg] border-cyan-300/[0.18] bg-black/70 shadow-[0_0_24px_rgba(34,211,238,0.055)]",
    numberClassName: "text-cyan-200/90",
    iconClassName: "text-cyan-200/45",
  },
  {
    icon: FiGrid,
    itemClassName:
      "col-start-3 col-end-12 row-start-2 rotate-[4deg] border-cyan-100/[0.1] bg-black/65",
    numberClassName: "text-cyan-200/85",
    iconClassName: "text-slate-300/35",
  },
  {
    icon: FiMessageCircle,
    itemClassName:
      "col-start-1 col-end-10 row-start-3 rotate-[-4deg] border-cyan-300/[0.18] bg-black/70 shadow-[0_0_24px_rgba(34,211,238,0.055)]",
    numberClassName: "text-cyan-200/90",
    iconClassName: "text-cyan-200/45",
  },
  {
    icon: FiUserX,
    itemClassName:
      "col-start-4 col-end-12 row-start-4 rotate-[5deg] border-rose-300/[0.22] bg-rose-950/[0.08] shadow-[0_0_24px_rgba(251,113,133,0.07)]",
    numberClassName: "text-rose-200/90",
    iconClassName: "text-rose-200/45",
  },
];

function ProblemSection() {
  const { problem } = siteConfig;

  return (
    <section
      id="problema"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 pb-20 pt-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.16] to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/[0.045] blur-3xl" />

      <Reveal className="mx-auto grid w-full max-w-7xl gap-y-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-16">
        <p className="hidden w-fit rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95 md:inline-flex lg:col-start-1 lg:row-start-1">
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

          <div className="relative mt-8 w-full md:hidden">
            <span
              aria-hidden="true"
              className="absolute right-[5%] top-[18%] z-0 h-1.5 w-11 rounded-full bg-cyan-200/[0.045]"
            />
            <span
              aria-hidden="true"
              className="absolute right-[17%] top-[27%] z-0 h-1 w-6 rounded-full bg-slate-200/[0.035]"
            />
            <span
              aria-hidden="true"
              className="absolute left-[1%] top-[39%] z-0 h-2 w-8 rounded-full bg-cyan-200/[0.055]"
            />
            <span
              aria-hidden="true"
              className="absolute left-[10%] top-[48%] z-0 h-1 w-5 rounded-full bg-slate-200/[0.025]"
            />
            <span
              aria-hidden="true"
              className="absolute right-[7%] top-[67%] z-0 h-1.5 w-9 rounded-full bg-cyan-200/[0.04]"
            />
            <span
              aria-hidden="true"
              className="absolute left-[2%] top-[78%] z-0 h-1 w-7 rounded-full bg-slate-200/[0.03]"
            />

            <ol
              className="relative z-10 grid grid-cols-12 grid-rows-[repeat(4,5.25rem)] gap-y-3 px-1"
              aria-label="Recorrido del problema"
            >
              {problem.sequence.map((step, index) => {
                const {
                  icon: Icon,
                  iconClassName,
                  itemClassName,
                  numberClassName,
                } = mobileSteps[index];

                return (
                  <li
                    className={`grid h-full grid-cols-[minmax(0,1fr)_auto] items-center rounded-[1.5rem] border px-4 py-3 ${itemClassName}`}
                    key={step}
                  >
                    <div className="min-w-0">
                      <span
                        className={`text-base font-semibold ${numberClassName}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-1 text-sm leading-5 text-slate-200">
                        {step}
                      </p>
                    </div>
                    <Icon
                      aria-hidden="true"
                      className={`text-2xl ${iconClassName}`}
                    />
                  </li>
                );
              })}
            </ol>
          </div>

          <ol
            className="mt-8 hidden grid-cols-1 items-stretch gap-y-3 md:grid md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-y-0"
            aria-label="Recorrido del problema"
          >
            {problem.sequence.map((step, index) => (
              <Fragment key={step}>
                <li className="grid min-h-20 min-w-0 grid-rows-[1rem_1fr] gap-y-2">
                  <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-5 text-slate-300">
                    {step}
                  </span>
                </li>

                {index < problem.sequence.length - 1 && (
                  <li
                    className="flex min-h-8 items-center justify-center text-xs text-slate-600 md:grid md:min-h-20 md:grid-rows-[1rem_1fr] md:items-stretch md:gap-y-2"
                    aria-hidden="true"
                  >
                    <span className="hidden md:block" />
                    <span className="inline-block rotate-90 md:flex md:h-5 md:items-center md:justify-center md:rotate-0">
                      →
                    </span>
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
