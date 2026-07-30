import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

function IncludesSection() {
  const { includes } = siteConfig;

  return (
    <section
      id="servicios"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.14] to-transparent" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 -translate-x-1/3 rounded-full bg-cyan-300/[0.04] blur-3xl" />

      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {includes.eyebrow}
          </p>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-[2.75rem]">
            {includes.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {includes.description}
          </p>
        </div>

        <div className="mx-auto mt-14 w-full max-w-6xl divide-y divide-white/[0.08] overflow-hidden rounded-3xl border border-white/[0.1] bg-black">
          <article className="grid items-center gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14 lg:px-10 lg:py-10">
            <div className="grid gap-3">
              <span className="text-[0.66rem] font-semibold text-cyan-200/90">
                01
              </span>
              <h3 className="text-base font-semibold text-slate-50">
                {includes.groups[0].title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                {includes.groups[0].description}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="grid gap-5"
            >
              <div className="grid gap-3">
                <span className="h-2 w-2/3 rounded-full bg-slate-100/70" />
                <span className="h-px w-full bg-white/[0.12]" />
                <span className="h-px w-4/5 bg-white/[0.08]" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <span className="h-12 rounded-lg bg-white/[0.055]" />
                <span className="h-12 rounded-lg bg-white/[0.04]" />
                <span className="hidden h-12 rounded-lg bg-white/[0.03] sm:block" />
              </div>
            </div>
          </article>

          <article className="grid items-center gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14 lg:px-10 lg:py-10">
            <div className="grid gap-3">
              <span className="text-[0.66rem] font-semibold text-cyan-200/90">
                02
              </span>
              <h3 className="text-base font-semibold text-slate-50">
                {includes.groups[1].title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                {includes.groups[1].description}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4"
            >
              <span className="h-px w-full bg-white/[0.1]" />
              <span className="h-10 w-28 rounded-lg bg-cyan-300" />
              <span className="h-px w-full bg-cyan-300/30" />
            </div>
          </article>

          <article className="grid items-center gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14 lg:px-10 lg:py-10">
            <div className="grid gap-3">
              <span className="text-[0.66rem] font-semibold text-cyan-200/90">
                03
              </span>
              <h3 className="text-base font-semibold text-slate-50">
                {includes.groups[2].title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                {includes.groups[2].description}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="grid gap-3"
            >
              <div className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3">
                <span className="h-px bg-cyan-300/35" />
                <span className="h-8 w-full rounded-md bg-white/[0.055]" />
              </div>
              <div className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3">
                <span className="h-px bg-white/[0.1]" />
                <span className="h-8 w-4/5 rounded-md bg-white/[0.04]" />
              </div>
              <div className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3">
                <span className="h-px bg-white/[0.07]" />
                <span className="h-8 w-3/5 rounded-md bg-white/[0.03]" />
              </div>
            </div>
          </article>
        </div>

        <div className="mx-auto flex max-w-6xl justify-center">
          <Button
            as={Link}
            to="/packs"
            variant="secondary"
            className="mt-7 w-full sm:w-auto"
          >
            {includes.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default IncludesSection;
