import { siteConfig } from "../../data/siteConfig";
import { getContactUrls } from "../../utils/contactUrls";
import { RiWhatsappFill } from "react-icons/ri";

const sideNotes = {
  left: [
    {
      title: "Restaurante El Sauce",
      detail: "sin sitio web · 0 consultas",
      className: "lg:absolute lg:left-0 lg:top-[37%] lg:-translate-x-4 lg:-translate-y-1/2",
    },
    {
      title: "Ana Rodríguez, Psicóloga",
      detail: "bio de Instagram como sitio",
      className: "lg:absolute lg:left-0 lg:top-[64%] lg:-translate-x-8 lg:-translate-y-1/2",
    },
  ],
  right: [
    {
      title: "Peluquería La Moderna",
      detail: "landing activa · +18 consultas/mes",
      className: "lg:absolute lg:right-0 lg:top-[37%] lg:translate-x-4 lg:-translate-y-1/2",
    },
    {
      title: "Lucas Fernández, Arquitecto",
      detail: "online · recibe consultas",
      className: "lg:absolute lg:right-0 lg:top-[64%] lg:translate-x-8 lg:-translate-y-1/2",
    },
  ],
};

const categories = [
  "Peluquerías",
  "Restaurantes",
  "Psicólogos",
  "Entrenadores",
  "Contadores",
  "Arquitectos",
  "Abogados",
  "Gimnasios",
  "Comercios locales",
];

function AmbientMarks() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020304_48%,#000000_100%)]" />
      <div className="absolute -right-40 top-4 h-[28rem] w-[28rem] rounded-full bg-cyan-100/[0.055] blur-[145px] sm:h-[42rem] sm:w-[42rem]" />
      <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-slate-100/[0.052] blur-[140px] sm:h-[38rem] sm:w-[38rem]" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/[0.028] blur-[155px]" />
      <div className="absolute inset-x-8 top-[18%] h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />
      <div className="absolute inset-x-16 bottom-[16%] h-px bg-gradient-to-r from-transparent via-cyan-100/[0.035] to-transparent" />
    </div>
  );
}

function HeroAmbientEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.04),transparent_40%)]" />
      <div className="hero-orb-a absolute -right-32 -top-44 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(190,245,255,0.16),rgba(190,245,255,0.055)_42%,transparent_70%)] blur-[155px] lg:h-[52rem] lg:w-[52rem]" />
      <div className="hero-orb-b absolute -bottom-48 -left-36 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.11),rgba(255,255,255,0.04)_45%,transparent_72%)] blur-[145px] lg:h-[42rem] lg:w-[42rem]" />
      <div className="hero-orb-c absolute left-1/2 top-[46%] h-[30rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(120,220,235,0.12),rgba(255,255,255,0.055)_38%,transparent_72%)] blur-[36px]" />
      <div className="absolute left-1/2 top-10 h-64 w-[66rem] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[112px]" />
      <div className="absolute right-[18%] top-[31%] h-36 w-36 rounded-full bg-slate-200/[0.06] blur-[74px]" />

      <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent lg:inset-x-20" />
      <div className="absolute inset-x-10 bottom-20 h-px bg-gradient-to-r from-transparent via-white/[0.032] to-transparent lg:inset-x-20" />
      <div className="absolute left-8 top-8 h-20 w-px bg-gradient-to-b from-white/[0.075] to-transparent lg:left-12" />
      <div className="absolute right-8 bottom-24 h-20 w-px bg-gradient-to-t from-white/[0.065] to-transparent lg:right-12" />
      <div className="absolute left-[17%] top-[38%] h-px w-28 bg-gradient-to-r from-transparent via-white/[0.048] to-transparent" />
      <div className="absolute right-[14%] top-[58%] h-px w-32 bg-gradient-to-r from-transparent via-white/[0.042] to-transparent" />

      <span className="hero-sparkle hero-sparkle-a absolute left-[13%] top-[32%] h-1 w-1 rounded-full bg-white/80" />
      <span className="hero-sparkle hero-sparkle-b absolute right-[13%] top-[41%] h-1 w-1 rounded-full bg-cyan-100/70" />
      <span className="hero-sparkle hero-sparkle-c absolute left-[23%] bottom-[27%] h-1 w-1 rounded-full bg-slate-100/70" />
      <span className="hero-sparkle hero-sparkle-d absolute right-[24%] bottom-[31%] hidden h-1 w-1 rounded-full bg-white/70 sm:block" />
      <span className="hero-sparkle hero-sparkle-e absolute right-[34%] top-[25%] hidden h-1.5 w-1.5 rounded-full bg-cyan-50/60 lg:block" />
    </div>
  );
}

function SideNote({ note, align = "left" }) {
  const alignment =
    align === "right" ? "items-end text-right" : "items-start text-left";
  const markerAlignment = align === "right" ? "justify-end" : "justify-start";
  const edgeRule =
    align === "right"
      ? "border-r border-white/[0.045] pr-4"
      : "border-l border-white/[0.045] pl-4";

  return (
    <div
      className={`hidden max-w-[14rem] flex-col gap-2.5 text-slate-200/42 opacity-75 lg:flex ${alignment} ${edgeRule} ${note.className}`}
    >
      <div className={`flex w-full items-center gap-2 ${markerAlignment}`}>
        <span className="h-px w-14 bg-gradient-to-r from-white/[0.014] via-white/[0.105] to-white/[0.014]" />
        <span className="h-1 w-1 rounded-full bg-cyan-100/18 shadow-[0_0_12px_rgba(224,242,254,0.09)]" />
      </div>
      <p className="text-[0.78rem] font-medium leading-5 tracking-normal">
        {note.title}
      </p>
      <p className="text-[0.7rem] font-normal leading-4 tracking-[0.01em] text-slate-400/44">
        {note.detail}
      </p>
    </div>
  );
}

function ScrollSignal() {
  return (
    <div
      aria-hidden="true"
      className="flex h-12 w-8 flex-col items-center justify-center gap-2 opacity-60"
    >
      <span className="h-6 w-px bg-gradient-to-b from-white/0 via-white/22 to-white/0" />
      <span className="h-px w-5 bg-gradient-to-r from-white/0 via-white/14 to-white/0" />
      <span className="h-px w-3 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
    </div>
  );
}

function CategoryStrip() {
  const loopedCategories = [...categories, ...categories];

  return (
    <div className="relative mt-3 w-full overflow-hidden border-t border-white/[0.032] px-2 pt-4 sm:mt-4 sm:px-4 lg:mt-4 lg:px-8 lg:pt-[1.05rem]">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.075] to-transparent"
      />
      <div className="mx-auto max-w-[90rem] overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]">
        <div className="rubros-marquee flex w-max items-center text-center text-[0.68rem] font-normal leading-5 tracking-[0.018em] text-slate-500/62 sm:text-[0.71rem]">
          {loopedCategories.map((category, index) => (
            <span
              className="inline-flex min-h-6 items-center justify-center gap-8 px-5"
              key={`${category}-${index}`}
            >
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-white/[0.07]"
                />
              )}
              <span className="whitespace-nowrap">{category}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const contactUrls = getContactUrls(siteConfig.contact);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] scroll-mt-28 flex-col items-center overflow-hidden bg-black px-4 pb-5 pt-[6.75rem] sm:px-6 sm:pb-6 sm:pt-[7.25rem] lg:px-0 lg:pb-5 lg:pt-[7rem]"
    >
      <AmbientMarks />

      <div className="mx-auto flex w-full flex-1 flex-col lg:w-[94vw] lg:max-w-[1560px]">
        <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-white/[0.075] bg-[#020304]/92 shadow-[0_36px_170px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.06)] motion-safe:animate-[hero-fade-up_700ms_ease-out_both] motion-reduce:animate-none sm:rounded-[2.35rem] lg:min-h-[560px] lg:rounded-[2.9rem]">
          <HeroAmbientEffects />

          <div className="grid h-full items-center gap-10 px-6 py-11 sm:px-8 sm:py-[3.25rem] lg:grid-cols-[minmax(15rem,1fr)_minmax(0,50rem)_minmax(15rem,1fr)] lg:gap-18 lg:px-14 lg:py-14 xl:grid-cols-[minmax(19rem,1fr)_minmax(0,50rem)_minmax(19rem,1fr)] xl:gap-28 xl:px-[4.5rem]">
            <div className="z-20 hidden h-full min-h-[30rem] lg:relative lg:col-start-1 lg:block">
              {sideNotes.left.map((note) => (
                <SideNote key={note.title} note={note} />
              ))}
            </div>

            <div className="absolute left-1/2 top-[51%] z-20 isolate w-[calc(100%-3rem)] max-w-[50rem] -translate-x-1/2 -translate-y-1/2 text-center sm:w-[min(50rem,calc(100%-4rem))]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[42%] -z-10 h-[18rem] w-[min(46rem,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.055),rgba(103,232,249,0.018)_42%,transparent_72%)] blur-2xl"
              />
              <h1 className="mx-auto max-w-[42rem] text-balance text-[2.75rem] font-medium leading-[0.98] tracking-[-0.016em] text-slate-50 drop-shadow-[0_18px_58px_rgba(0,0,0,0.48)] sm:text-[4.25rem] sm:leading-[0.96] lg:text-[5.1rem] lg:leading-[0.95]">
                Landing pages{" "}
                <span className="font-semibold text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]">
                  claras
                </span>
                <br />
                para recibir{" "}
                <span className="font-semibold text-white drop-shadow-[0_0_20px_rgba(125,211,252,0.13)]">
                  más consultas
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-[42rem] text-[0.98rem] font-normal leading-7 text-slate-300/74 sm:mt-6 sm:text-[1.05rem] sm:leading-8">
                Diseño sitios modernos para negocios que necesitan verse mejor,
                explicar rápido qué ofrecen y recibir consultas por WhatsApp.
              </p>

              <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-1/2 -z-10 hidden h-10 -translate-y-1/2 rounded-full bg-cyan-100/[0.035] blur-2xl sm:block"
                />
                <a
                  className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-full border border-cyan-100/72 bg-cyan-100 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.13),inset_0_1px_0_rgba(255,255,255,0.54)] transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:shadow-[0_0_42px_rgba(103,232,249,0.18),inset_0_1px_0_rgba(255,255,255,0.68)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100 sm:w-auto"
                  href={contactUrls.whatsapp}
                  rel="noreferrer"
                  target="_blank"
                >
                  <RiWhatsappFill aria-hidden="true" className="h-5 w-5 shrink-0" />
                  Hablemos por WhatsApp
                </a>
                <a
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.018] px-6 py-3 text-sm font-semibold text-slate-300/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.032)] transition-[background-color,border-color,color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.045] hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 sm:w-auto"
                  href="#servicios"
                >
                  Ver ejemplos
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>

            </div>

            <div className="z-20 hidden h-full min-h-[30rem] lg:relative lg:col-start-3 lg:block">
              {sideNotes.right.map((note) => (
                <SideNote align="right" key={note.title} note={note} />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden justify-center lg:flex">
            <ScrollSignal />
          </div>
        </div>

        <CategoryStrip />
      </div>
    </section>
  );
}

export default HeroSection;
