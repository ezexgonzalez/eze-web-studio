import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";

function PackCard({ pack }) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 sm:p-6 ${
        pack.recommended
          ? "border-cyan-300/[0.28] bg-cyan-300/[0.06] shadow-[0_0_0_1px_rgba(34,211,238,0.035),0_22px_76px_rgba(34,211,238,0.075)] hover:border-cyan-300/[0.4] hover:bg-cyan-300/[0.075]"
          : "border-white/[0.08] bg-white/[0.028] shadow-[0_18px_60px_rgba(0,0,0,0.24)] hover:border-white/[0.13] hover:bg-white/[0.045]"
      }`}
    >
      {pack.recommended && (
        <>
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/65 to-transparent" />
          <span className="mb-4 w-fit rounded-full border border-cyan-300/[0.18] bg-cyan-300/[0.08] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Recomendado
          </span>
        </>
      )}

      <div className="border-b border-white/[0.075] pb-5">
        <h3 className="text-xl font-semibold tracking-[-0.015em] text-slate-50">
          {pack.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {pack.subtitle}
        </p>
      </div>

      <ul className="mt-5 flex-1 space-y-3.5">
        {pack.includes.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-300" key={item}>
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ring-4 ${
                pack.recommended
                  ? "bg-cyan-300 ring-cyan-300/[0.12]"
                  : "bg-slate-500 ring-white/[0.035]"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href="#contacto"
        variant={pack.recommended ? "primary" : "secondary"}
        className="mt-7 w-full"
      >
        {pack.cta}
      </Button>
    </article>
  );
}

function PacksSection() {
  const { packs } = siteConfig;

  return (
    <section
      id="packs"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.13] to-transparent" />
      <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/[0.04] blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {packs.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
            {packs.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {packs.description}
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 lg:mt-12 lg:grid-cols-3">
          {packs.items.map((pack) => (
            <PackCard key={pack.title} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PacksSection;
