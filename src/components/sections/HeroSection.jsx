import { siteConfig } from "../../data/siteConfig";
import { getContactUrls } from "../../utils/contactUrls";
import { RiWhatsappFill } from "react-icons/ri";

function HeroAmbientEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,9,11,0.72)_0%,rgba(0,0,0,0.86)_52%,#000_100%)]" />
      <div className="hero-light-a absolute -left-32 -top-28 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.2)_0%,rgba(103,232,249,0.075)_46%,transparent_72%)] blur-[150px] sm:h-[46rem] sm:w-[46rem]" />
      <div className="hero-light-b absolute -bottom-36 -right-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.16)_0%,rgba(103,232,249,0.055)_48%,transparent_74%)] blur-[150px] sm:h-[48rem] sm:w-[48rem]" />
    </div>
  );
}

function ScrollSignal() {
  return (
    <div aria-hidden="true" className="flex h-12 w-8 flex-col items-center justify-center gap-2 opacity-60">
      <span className="h-6 w-px bg-gradient-to-b from-white/0 via-white/22 to-white/0" />
      <span className="h-px w-5 bg-gradient-to-r from-white/0 via-white/14 to-white/0" />
      <span className="h-px w-3 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
    </div>
  );
}

function CategoryStrip({ categories }) {
  const loopedCategories = [...categories, ...categories];

  return (
    <div className="absolute bottom-0 left-0 z-10 box-border w-full max-w-full overflow-hidden border-t border-white/[0.04] px-2 py-4 sm:px-4 lg:px-8">
      <div className="mx-auto w-full max-w-[90rem] overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]">
        <div className="rubros-marquee flex w-max items-center text-center text-[0.68rem] font-normal leading-5 tracking-[0.018em] text-slate-500/62 sm:text-[0.71rem]">
          {loopedCategories.map((category, index) => (
            <span aria-hidden={index >= categories.length ? "true" : undefined} className="inline-flex min-h-6 items-center justify-center gap-8 px-5" key={`${category}-${index}`}>
              {index > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/[0.07]" />}
              <span className="whitespace-nowrap">{category}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const { hero, contact } = siteConfig;
  const contactUrls = getContactUrls(contact);

  return (
    <section id="inicio" className="relative isolate flex h-[100dvh] w-full scroll-mt-28 flex-col overflow-hidden bg-black">
      <HeroAmbientEffects />

      <div className="relative z-20 grid w-full flex-1 items-center gap-10 px-6 pb-[100px] pt-[6.75rem] motion-safe:animate-[hero-fade-up_700ms_ease-out_both] motion-reduce:animate-none sm:px-8 sm:pb-[100px] sm:pt-[7.25rem] lg:grid-cols-[minmax(13rem,1fr)_minmax(0,50rem)_minmax(13rem,1fr)] lg:gap-16 lg:px-16 lg:pb-[100px] lg:pt-[7rem] xl:grid-cols-[minmax(18rem,1fr)_minmax(0,52rem)_minmax(18rem,1fr)] xl:gap-24 xl:px-24">
        <div className="relative z-20 isolate mx-auto w-full max-w-[50rem] text-center lg:col-start-2 [@media(min-width:1024px)_and_(max-height:700px)]:-translate-y-8">
          <h1 className="mx-auto max-w-[42rem] bg-gradient-to-b from-white via-slate-50 to-slate-300 bg-clip-text text-balance text-[2.75rem] font-medium leading-[0.98] tracking-normal text-transparent drop-shadow-[0_18px_58px_rgba(0,0,0,0.58)] sm:text-[4.25rem] sm:leading-[0.96] lg:relative lg:left-1/2 lg:w-max lg:max-w-none lg:-translate-x-1/2 lg:text-[5.1rem] lg:leading-[0.95]">
            {hero.title.map((line, index) => (
              <span className="lg:whitespace-nowrap" key={index}>
                {line.map((part) => (
                  <span className={part.emphasis ? "font-semibold text-white" : ""} key={part.text}>
                    {part.text}
                  </span>
                ))}
                {index < hero.title.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-5 max-w-[42rem] text-[0.98rem] font-normal leading-7 text-slate-200/84 sm:mt-6 sm:text-[1.05rem] sm:leading-8">
            {hero.description}
          </p>

          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
            <a className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-full border border-cyan-100/74 bg-cyan-100 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_42px_rgba(103,232,249,0.11)] transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:shadow-[0_0_52px_rgba(103,232,249,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100 sm:w-auto" href={contactUrls.whatsapp} rel="noreferrer" target="_blank">
              <RiWhatsappFill aria-hidden="true" className="h-5 w-5 shrink-0" />
              {hero.primaryCta}
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden justify-center lg:flex">
          <ScrollSignal />
        </div>
      </div>

      <CategoryStrip categories={hero.categories} />
    </section>
  );
}

export default HeroSection;
