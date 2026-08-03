import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowDown,
  FiImage,
  FiMenu,
  FiMoreHorizontal,
  FiShield,
  FiStar,
  FiUser,
  FiZap,
} from "react-icons/fi";
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

          <div className="mt-8 hidden grid-cols-1 items-stretch gap-y-3 md:grid md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-y-0">
            <p className="flex min-h-20 min-w-0 items-center justify-center text-center text-sm text-slate-400 sm:text-base">
              {solution.flow.inputs[0]}
            </p>

            <span className="flex min-h-8 items-center justify-center text-xs text-slate-600 md:min-h-20" aria-hidden="true">
              <span className="inline-block rotate-90 md:rotate-0">→</span>
            </span>

            <p className="flex min-h-20 min-w-0 items-center justify-center text-center text-sm font-semibold text-cyan-100 sm:text-base">
              {solution.flow.center}
            </p>

            <span className="flex min-h-8 items-center justify-center text-xs text-cyan-300/70 md:min-h-20" aria-hidden="true">
              <span className="inline-block rotate-90 md:rotate-0">→</span>
            </span>

            <p className="flex min-h-20 min-w-0 items-center justify-center text-center text-sm font-semibold leading-5 text-cyan-100 sm:text-base">
              {solution.flow.result}
            </p>
          </div>

          <div
            className="mx-auto mt-8 grid w-full max-w-[340px] grid-rows-[auto_3rem_2.75rem_12.75rem_auto] justify-items-center gap-y-2 md:hidden"
            data-solution-mobile-flow
          >
            <p className="text-center text-sm leading-5 text-slate-300">
              {solution.flow.inputs[0]}
            </p>

            <div className="grid h-12 w-full grid-cols-4 items-center gap-3 px-2" aria-hidden="true">
              <div className="flex h-7 w-12 self-end justify-self-center flex-col justify-center gap-1 rounded-sm border border-white/[0.14] bg-white/[0.04] px-2">
                <span className="h-px w-7 bg-white/25" />
                <span className="flex items-center gap-1">
                  <span className="h-px w-4 bg-white/15" />
                  <span className="h-1 w-1 rounded-full bg-cyan-300/70" />
                </span>
              </div>

              <div className="flex h-8 w-11 self-start justify-self-center items-center justify-center rounded-sm border border-white/[0.14] bg-slate-950 text-slate-500">
                <FiImage className="h-4 w-4" />
              </div>

              <div className="relative flex h-7 w-12 justify-self-center items-center justify-center rounded-sm border border-white/[0.12] bg-white/[0.025] text-slate-500">
                <FiMoreHorizontal className="h-4 w-4" />
                <span className="absolute left-1.5 top-1 h-0.5 w-0.5 rounded-full bg-cyan-300/65" />
                <span className="absolute bottom-1 right-1.5 h-0.5 w-2 bg-cyan-300/40" />
              </div>

              <div className="flex h-8 w-8 self-end justify-self-center items-center justify-center rounded-full bg-slate-700/30 text-slate-400">
                <FiUser className="h-4 w-4" />
              </div>
            </div>

            <div className="relative h-11 w-[240px] overflow-hidden" aria-hidden="true">
              <span className="absolute bottom-0 right-1/2 h-px w-28 origin-right rotate-[20deg] bg-cyan-300/20" />
              <span className="absolute bottom-0 left-1/2 h-px w-28 origin-left -rotate-[20deg] bg-cyan-300/20" />
              <span className="absolute bottom-0 right-1/2 h-px w-16 origin-right rotate-[34deg] bg-cyan-300/20" />
              <span className="absolute bottom-0 left-1/2 h-px w-16 origin-left -rotate-[34deg] bg-cyan-300/20" />
            </div>

            <div className="grid h-[204px] w-[150px] grid-rows-[24px_48px_42px_54px_1fr] rounded-[0.9rem] border border-white/[0.24] bg-black/90 p-2 shadow-[0_0_28px_rgba(34,211,238,0.08)]">
              <div className="flex items-start justify-between border-b border-white/[0.09] px-1 pt-0.5 text-slate-500">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                <FiMenu className="h-3.5 w-3.5" />
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <span className="h-1 w-20 rounded-full bg-white/80" />
                <span className="h-1 w-16 rounded-full bg-slate-500/55" />
                <span className="h-1 w-8 rounded-full bg-cyan-300/75" />
              </div>

              <div className="grid grid-cols-3 border-y border-white/[0.07]">
                {[
                  { Icon: FiStar, key: "star" },
                  { Icon: FiZap, key: "zap" },
                  { Icon: FiShield, key: "shield" },
                ].map(({ Icon, key }) => (
                  <div key={key} className="flex flex-col items-center justify-center gap-1.5 text-cyan-200/70">
                    <Icon className="h-3.5 w-3.5" />
                    <span className="h-0.5 w-4 rounded-full bg-slate-600/55" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[46px_1fr] items-center gap-2 px-1">
                <div className="flex h-9 items-center justify-center rounded border border-white/[0.08] bg-white/[0.035] text-slate-500">
                  <FiImage className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="h-0.5 w-full rounded-full bg-white/35" />
                  <span className="h-0.5 w-4/5 rounded-full bg-slate-600/65" />
                  <span className="h-0.5 w-3/5 rounded-full bg-slate-700/70" />
                </div>
              </div>

              <div className="flex w-full items-center justify-center gap-1.5 rounded-md bg-cyan-300 px-1 text-[11px] font-semibold text-black">
                <FaWhatsapp className="h-3.5 w-3.5 shrink-0" />
                <span className="whitespace-nowrap">{solution.flow.result}</span>
              </div>
            </div>

            <div className="grid h-8 grid-rows-[6px_20px] justify-items-center gap-y-1.5 text-center">
              <FiArrowDown className="h-1.5 w-3 scale-150 text-cyan-300/65" aria-hidden="true" />
              <p className="text-sm leading-5 text-slate-300">{solution.flow.result}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;
