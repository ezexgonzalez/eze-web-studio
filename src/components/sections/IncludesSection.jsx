import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

function StructureBlock({ group, index }) {
  return (
    <div className="relative border-t border-white/[0.08] px-5 py-5 first:border-t-0 sm:px-6">
      <div className="absolute left-0 top-6 h-6 w-px bg-cyan-300/50 shadow-[0_0_18px_rgba(34,211,238,0.28)]" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="text-[0.66rem] font-semibold text-cyan-200/90">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-semibold text-slate-50">
              {group.title}
            </h3>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {group.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:max-w-[17rem] sm:justify-end">
          {group.items.map((item) => (
            <span
              className="rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function IncludesSection() {
  const { includes } = siteConfig;

  return (
    <section
      id="servicios"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.14] to-transparent" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 -translate-x-1/3 rounded-full bg-cyan-300/[0.04] blur-3xl" />

      <Reveal className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
              {includes.eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-[2.75rem]">
              {includes.title}
            </h2>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {includes.description}
          </p>

          <Button
            as={Link}
            to="/packs"
            variant="secondary"
            className="mt-7 w-full sm:w-auto"
          >
            {includes.cta}
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/[0.16] bg-white/[0.032] shadow-[0_28px_100px_rgba(0,0,0,0.38),0_0_42px_rgba(34,211,238,0.055)] backdrop-blur-xl">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-300/[0.065] blur-3xl" />

          <div className="relative border-b border-white/[0.08] px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
                  Landing anatomy
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-100">
                  Una estructura simple para ordenar lo importante.
                </p>
              </div>
              <span className="hidden h-px w-20 rounded-full bg-cyan-300/60 shadow-[0_0_18px_rgba(34,211,238,0.24)] sm:block" />
            </div>
          </div>

          {includes.groups.map((group, index) => (
            <StructureBlock group={group} index={index} key={group.title} />
          ))}

          <div className="relative border-t border-cyan-300/[0.12] bg-cyan-300/[0.045] px-5 py-4 sm:px-6">
            <p className="text-sm font-medium leading-6 text-cyan-50">
              Menos ruido, más claridad para que el cliente llegue al contacto.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default IncludesSection;
