import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";

function HighlightedTitle({ title, highlightedText }) {
  const [before, after] = title.split(highlightedText);

  return (
    <>
      {before}
      <span className="text-cyan-300">{highlightedText}</span>
      {after}
    </>
  );
}

function HeroPreviewCard() {
  const [services, photos, location, whatsapp, social, faq] =
    siteConfig.previewItems;
  const mainItems = [
    { label: services, detail: "Qué ofrecés", accent: true },
    { label: photos, detail: "Galería simple" },
    { label: location, detail: "Cómo encontrarte" },
    { label: whatsapp, detail: "Contacto directo", accent: true },
  ];

  return (
    <GlassCard className="relative mx-auto w-full max-w-md overflow-hidden p-4 ring-1 ring-cyan-300/[0.07] transition-[border-color,box-shadow,transform] duration-500 ease-out hover:border-cyan-300/[0.2] hover:shadow-[0_28px_110px_rgba(0,0,0,0.5),0_0_42px_rgba(34,211,238,0.09)] motion-safe:animate-[hero-fade-up_800ms_ease-out_140ms_both] motion-safe:lg:hover:-translate-y-1 motion-reduce:animate-none sm:p-5 lg:max-w-lg">
      <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-cyan-300/[0.12] blur-3xl" />
      <div className="absolute -bottom-24 left-8 h-40 w-40 rounded-full bg-cyan-500/[0.055] blur-3xl" />
      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/[0.07] pb-4">
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
              Landing preview
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-[-0.015em] text-slate-50">
              Presencia online ordenada
            </h2>
          </div>
          <div className="mt-1 flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/[0.22]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/[0.22]" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.62)]" />
          </div>
        </div>

        <div className="rounded-[1.35rem] border border-white/[0.08] bg-black/35 p-4 shadow-inner shadow-white/[0.025] sm:p-5">
          <div className="mb-4 h-px w-24 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.25)]" />
          <div className="space-y-2">
            <div className="h-2.5 w-5/6 rounded-full bg-white/[0.17]" />
            <div className="h-2.5 w-2/3 rounded-full bg-white/[0.1]" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/[0.07]" />
          </div>
          <div className="mt-5 inline-flex rounded-full border border-cyan-300/[0.16] bg-cyan-300/[0.08] px-3 py-1.5 text-[0.68rem] font-semibold text-cyan-100">
            Propuesta clara
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
          {mainItems.map((item) => (
            <div
              className="rounded-2xl border border-white/[0.075] bg-white/[0.032] p-3.5 transition-[background-color,border-color,transform] duration-300 ease-out hover:border-cyan-300/[0.24] hover:bg-white/[0.055]"
              key={item.label}
            >
              <div
                className={`mb-3 h-px w-8 rounded-full ${
                  item.accent ? "bg-cyan-300" : "bg-white/[0.2]"
                }`}
              />
              <p className="text-sm font-semibold text-slate-100/95">
                {item.label}
              </p>
              <p className="mt-1.5 text-xs text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {[social, faq].map((item) => (
            <div
              className="flex items-center justify-between rounded-full border border-white/[0.07] bg-white/[0.028] px-3.5 py-2.5 transition-[background-color,border-color] duration-300 ease-out hover:border-cyan-300/[0.22] hover:bg-white/[0.05]"
              key={item}
            >
              <span className="text-xs font-medium text-slate-300">{item}</span>
              <span className="h-px w-8 bg-white/[0.16]" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-cyan-300/[0.15] bg-cyan-300/[0.075] px-4 py-3.5 shadow-[0_0_26px_rgba(34,211,238,0.055)] transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-cyan-300/[0.28] hover:bg-cyan-300/[0.095] hover:shadow-[0_0_34px_rgba(34,211,238,0.09)]">
          <span className="text-sm font-semibold text-cyan-100">
            Consultar ahora
          </span>
          <span className="h-px w-12 bg-cyan-300/60" />
        </div>
      </div>
    </GlassCard>
  );
}

function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_44%,rgba(34,211,238,0.11),transparent_28%),radial-gradient(circle_at_48%_100%,rgba(6,182,212,0.035),transparent_30%),linear-gradient(180deg,#000000_0%,#000000_58%,#02040a_100%)]" />
      <div className="absolute inset-x-8 top-24 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.12] to-transparent sm:top-28" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div className="max-w-[46rem] motion-safe:animate-[hero-fade-up_700ms_ease-out_both] motion-reduce:animate-none">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.07] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {hero.eyebrow}
          </p>

          <h1 className="text-balance text-[2.45rem] font-semibold leading-[1.11] tracking-[-0.03em] text-slate-50 sm:text-5xl sm:leading-[1.08] lg:text-[4.35rem] lg:leading-[1.045]">
            <HighlightedTitle
              title={hero.title}
              highlightedText={hero.highlightedText}
            />
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="a" href="#contacto" className="w-full sm:w-auto">
              {hero.primaryCta}
            </Button>
            <Button
              as="a"
              href="#proceso"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta}
            </Button>
          </div>

        </div>

        <HeroPreviewCard />
      </div>
    </section>
  );
}

export default HeroSection;
