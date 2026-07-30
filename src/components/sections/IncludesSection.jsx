import { Fragment } from "react";
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
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
          {includes.eyebrow}
        </p>
        <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-[2.75rem]">
          {includes.title}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {includes.description}
        </p>

        <div className="mt-12 grid gap-y-8 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)] lg:gap-x-8 lg:gap-y-0">
          {includes.groups.map((group, index) => (
            <Fragment key={group.title}>
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="h-px w-full bg-white/[0.08] lg:h-full lg:w-px"
                />
              )}
              <article
                className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-y-4"
              >
                <span className="text-[0.66rem] font-semibold text-cyan-200/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-slate-50">
                  {group.title}
                </h3>
                <p className="text-sm leading-6 text-slate-400">
                  {group.description}
                </p>
                <p className="text-xs font-medium leading-5 text-slate-200">
                  {group.items.join(" · ")}
                </p>
              </article>
            </Fragment>
          ))}
        </div>

        <Button
          as={Link}
          to="/packs"
          variant="secondary"
          className="mt-7 w-full sm:w-auto"
        >
          {includes.cta}
        </Button>
      </Reveal>
    </section>
  );
}

export default IncludesSection;
