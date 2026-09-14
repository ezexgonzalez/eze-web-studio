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

          <div
            className="mx-auto mt-7 w-[86%] max-w-[340px] md:hidden"
            data-solution-mobile-flow
          >
            <div
              className="relative mx-auto aspect-[8/13] w-full max-w-[320px] [container-type:inline-size]"
              data-solution-scenario
            >
              <p className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-center text-sm text-slate-300">
                {solution.flow.inputs[0]}
              </p>

              <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                viewBox="0 0 800 1300"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <path d="M142 236 C174 300 224 372 276 405" fill="none" stroke="rgb(34 211 238)" strokeWidth="6" strokeOpacity="0.62" strokeLinecap="round" />
                <path d="M330 205 C338 280 350 356 362 405" fill="none" stroke="rgb(34 211 238)" strokeWidth="6" strokeOpacity="0.62" strokeLinecap="round" />
                <path d="M548 212 C526 286 487 360 448 405" fill="none" stroke="rgb(34 211 238)" strokeWidth="6" strokeOpacity="0.62" strokeLinecap="round" />
                <path d="M704 236 C674 303 602 372 534 405" fill="none" stroke="rgb(34 211 238)" strokeWidth="6" strokeOpacity="0.62" strokeLinecap="round" />
                <circle cx="142" cy="236" r="5" fill="rgb(34 211 238)" />
                <circle cx="330" cy="205" r="5" fill="rgb(34 211 238)" />
                <circle cx="548" cy="212" r="5" fill="rgb(34 211 238)" />
                <circle cx="704" cy="236" r="5" fill="rgb(34 211 238)" />
              </svg>

              <div
                className="absolute left-[4.5%] top-[12.5%] z-10 flex h-[5.2%] w-[13.5%] flex-col justify-center gap-[1.1cqw] rounded-[1.5cqw] border border-white/[0.1] bg-white/[0.035] px-[2cqw] text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                data-solution-fragment="1"
              >
                <span className="h-px w-full bg-white/20" />
                <span className="flex items-center gap-[1cqw]">
                  <span className="h-px w-3/5 bg-white/15" />
                  <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-cyan-300/70" />
                </span>
              </div>

              <div
                className="absolute left-[34.5%] top-[8.5%] z-10 flex h-[6.2%] w-[14%] items-center justify-center rounded-[1.5cqw] border border-white/[0.12] bg-white/[0.035] text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                data-solution-fragment="2"
              >
                <FiImage className="h-[4cqw] w-[4cqw]" />
              </div>

              <div
                className="absolute left-[60.5%] top-[10.4%] z-10 flex h-[5.5%] w-[16.5%] items-center justify-center rounded-[1.5cqw] border border-white/[0.1] bg-white/[0.035] text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                data-solution-fragment="3"
              >
                <FiMoreHorizontal className="h-[4cqw] w-[4cqw]" />
                <span className="absolute left-[2cqw] top-[1.5cqw] h-px w-[3cqw] bg-white/15" />
                <span className="absolute bottom-[1.5cqw] right-[2cqw] h-[0.5cqw] w-[3cqw] rounded-full bg-cyan-300/45" />
              </div>

              <div
                className="absolute left-[86.5%] top-[12.5%] z-10 flex h-[5.5%] w-[9%] items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035] text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                data-solution-fragment="4"
              >
                <FiUser className="h-[4cqw] w-[4cqw]" />
              </div>

              <div
                className="absolute left-[23.75%] top-[31.15%] z-20 h-[53.85%] w-[53.75%] rounded-[4.5cqw] border border-white/[0.26] bg-gradient-to-b from-white/[0.055] via-slate-950/95 to-black shadow-[0_0_10cqw_rgba(34,211,238,0.09),inset_0_1px_0_rgba(255,255,255,0.04)]"
                data-solution-phone
              >
                <div className="relative h-full w-full">
                  <div className="absolute left-[5%] top-[4%] h-[9%] w-[90%] border-b border-white/[0.07] text-slate-500">
                    <span className="absolute left-[1cqw] top-[1.5cqw] h-[1.8cqw] w-[1.8cqw] rounded-full bg-cyan-300/80" />
                    <FiMenu className="absolute right-[1cqw] top-[0.7cqw] h-[3.5cqw] w-[3.5cqw]" />
                  </div>

                  <div className="absolute left-[8%] top-[16%] h-[22%] w-[84%]">
                    <span className="absolute left-1/2 top-[16%] h-[1.2cqw] w-[22.5cqw] -translate-x-1/2 rounded-full bg-white/80" />
                    <span className="absolute left-1/2 top-[48%] h-[1cqw] w-[16.25cqw] -translate-x-1/2 rounded-full bg-slate-500/55" />
                    <span className="absolute left-1/2 top-[75%] h-[0.8cqw] w-[8.1cqw] -translate-x-1/2 rounded-full bg-cyan-300/75" />
                  </div>

                  <div className="absolute left-[7%] top-[42%] grid h-[15%] w-[86%] grid-cols-3 border-y border-white/[0.07]">
                    {[
                      { Icon: FiStar, key: "star" },
                      { Icon: FiZap, key: "zap" },
                      { Icon: FiShield, key: "shield" },
                    ].map(({ Icon, key }) => (
                      <div key={key} className="flex flex-col items-center justify-center gap-[1cqw] text-cyan-200/70">
                        <Icon className="h-[3.5cqw] w-[3.5cqw]" />
                        <span className="h-px w-[4cqw] rounded-full bg-slate-600/55" />
                      </div>
                    ))}
                  </div>

                  <div className="absolute left-[7%] top-[60%] h-px w-[86%] bg-white/[0.07]" />

                  <div className="absolute left-[7%] top-[64%] h-[17%] w-[86%]">
                    <div className="absolute left-0 top-[8%] flex h-[75%] w-[30%] items-center justify-center rounded-[1.5cqw] bg-white/[0.045] text-slate-500">
                      <FiImage className="h-[4cqw] w-[4cqw]" />
                    </div>
                    <div className="absolute right-0 top-[25%] h-[55%] w-[62%]">
                      <span className="absolute left-0 top-0 h-px w-full rounded-full bg-white/35" />
                      <span className="absolute left-0 top-[48%] h-px w-4/5 rounded-full bg-slate-600/65" />
                    </div>
                  </div>

                  <div className="absolute left-[6%] top-[85%] flex h-[10%] w-[88%] items-center justify-center gap-[1.5cqw] rounded-[1.5cqw] bg-cyan-300 px-[1cqw] text-[3.1cqw] font-semibold text-black">
                    <FaWhatsapp className="h-[3.5cqw] w-[3.5cqw] shrink-0" />
                    <span className="whitespace-nowrap">{solution.flow.result}</span>
                  </div>
                </div>
              </div>

              <FiArrowDown className="absolute left-1/2 top-[87.5%] z-20 h-[4cqw] w-[4cqw] -translate-x-1/2 text-cyan-300/65" aria-hidden="true" />
              <p className="absolute left-1/2 top-[92%] z-20 w-4/5 -translate-x-1/2 text-center text-sm leading-5 text-slate-300">
                {solution.flow.result}
              </p>
            </div>
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
        </div>
      </Reveal>
    </section>
  );
}

export default SolutionSection;
