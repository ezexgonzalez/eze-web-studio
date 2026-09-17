import { FiBarChart2, FiSmartphone, FiZap } from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";

const attributeIcons = {
  strategy: FiBarChart2,
  mobile: FiSmartphone,
  identity: FiZap,
};

function BrandLabel() {
  return (
    <span className="whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-slate-50 sm:text-[0.68rem]">
      EZE WEB STUDIO
    </span>
  );
}

function EditorialRail({ desktopTrailing, mobileTrailing }) {
  return (
    <div className="flex items-center justify-between gap-5 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-10">
      <BrandLabel />
      <span aria-hidden="true" className="hidden h-px bg-white/[0.38] lg:block" />
      <span className="max-w-32 text-right text-[0.53rem] font-medium uppercase leading-3 tracking-[0.23em] text-slate-400 sm:max-w-40 sm:text-[0.58rem] lg:max-w-none lg:whitespace-nowrap lg:text-[0.56rem] lg:leading-normal lg:tracking-[0.27em]">
        <span className="lg:hidden">{mobileTrailing}</span>
        <span className="hidden lg:inline">{desktopTrailing}</span>
      </span>
    </div>
  );
}

function LiveDemoLink({ className = "" }) {
  const { featuredDemo } = siteConfig;

  return (
    <a
      className={`inline-flex items-center gap-2 border-b border-cyan-300/90 pb-1 text-[0.84rem] font-medium text-cyan-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 lg:text-[0.88rem] ${className}`}
      href={featuredDemo.liveUrl}
      rel="noreferrer"
      target="_blank"
    >
      Ver demo en vivo <span aria-hidden="true" className="text-base leading-none">↗</span>
    </a>
  );
}

function MobileFrame({ image }) {
  return (
    <figure className="overflow-hidden rounded-[1.1rem] border border-slate-300/70 bg-[#111518] p-[3px] shadow-[0_12px_28px_rgba(0,0,0,0.32)] lg:rounded-[2rem] lg:p-[5px]">
      <img
        alt={image.alt}
        className="block h-auto w-full rounded-[0.95rem] lg:rounded-[1.7rem]"
        decoding="async"
        loading="lazy"
        src={image.src}
      />
    </figure>
  );
}

function BrowserFrame({ image, urlLabel }) {
  return (
    <figure className="overflow-hidden rounded-[0.85rem] border border-slate-300/55 bg-[#0a0d0f]">
      <div className="flex h-8 items-center gap-3 border-b border-white/[0.1] bg-[#171c20] px-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="h-2 w-2 rounded-full bg-slate-400/70" />
          <i className="h-2 w-2 rounded-full bg-slate-400/70" />
          <i className="h-2 w-2 rounded-full bg-slate-400/70" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-black/35 px-3 py-1 text-[0.58rem] text-slate-300">
          {urlLabel}
        </span>
        <span aria-hidden="true" className="text-xs tracking-[0.16em] text-slate-500">•••</span>
      </div>
      <img
        alt={image.alt}
        className="block h-auto w-full"
        decoding="async"
        loading="lazy"
        src={image.src}
      />
    </figure>
  );
}

function AttributeList() {
  const { featuredDemo } = siteConfig;

  return (
    <div className="mt-12 space-y-0 border-b border-white/[0.16]">
      {featuredDemo.attributes.map((attribute) => {
        const Icon = attributeIcons[attribute.icon];

        return (
          <div className="grid grid-cols-[2.1rem_1fr] gap-x-2 border-t border-white/[0.16] py-4 first:border-t-0 first:pt-0" key={attribute.label}>
            <Icon aria-hidden="true" className="mt-1 h-5 w-5 text-slate-300" />
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-slate-100">
                {attribute.label}
              </p>
              <p className="mt-1 text-[0.66rem] leading-4 text-slate-400">{attribute.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MobileComposition() {
  const { featuredDemo } = siteConfig;

  return (
    <div className="mt-10 grid grid-cols-[7.5rem_11.5rem] items-start justify-between lg:hidden">
      <div className="pt-12">
        <div className="flex items-center gap-3">
          <p className="whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
            {featuredDemo.projectLabel}
          </p>
          <span aria-hidden="true" className="h-px min-w-0 flex-1 bg-slate-500/70" />
        </div>
        <h2 className="mt-7 text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.045em] text-slate-50">
          Gimnasio<br />boutique
        </h2>
        <p className="mt-6 text-[0.84rem] leading-5 text-slate-400">{featuredDemo.mobileDescription}</p>
        <AttributeList />
        <LiveDemoLink className="mt-8" />
      </div>
      <MobileFrame image={featuredDemo.mobileImage} />
    </div>
  );
}

function DesktopComposition() {
  const { featuredDemo } = siteConfig;

  return (
    <>
      <div className="mt-12 hidden grid-cols-[1fr_1fr_13.25rem] items-end gap-12 lg:grid">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cyan-200">
            {featuredDemo.projectLabel}
          </p>
          <h2 className="mt-3 text-[3.35rem] font-semibold leading-[0.95] tracking-[-0.045em] text-slate-50">
            {featuredDemo.title}
          </h2>
        </div>

        <div className="border-l border-white/[0.35] pl-12">
          <p className="max-w-[25rem] text-[0.95rem] leading-6 text-slate-300">{featuredDemo.desktopDescription}</p>
          <LiveDemoLink className="mt-3" />
        </div>

        <div className="border-l border-white/[0.18] pl-8">
          <span aria-hidden="true" className="mb-5 block h-px w-10 bg-cyan-300" />
          <p className="text-[0.6rem] font-medium uppercase leading-5 tracking-[0.22em] text-slate-300">
            {featuredDemo.desktopEditorial[0]}
            <br />
            {featuredDemo.desktopEditorial[1]}
          </p>
        </div>
      </div>

      <div className="mt-9 hidden grid-cols-[58rem_18.75rem] items-start gap-x-11 lg:ml-5 lg:grid">
        <BrowserFrame image={featuredDemo.desktopImage} urlLabel={featuredDemo.liveUrlLabel} />
        <MobileFrame image={featuredDemo.mobileImage} />
      </div>
    </>
  );
}

function DemoSection() {
  const { featuredDemo } = siteConfig;

  return (
    <section id="demo" className="relative isolate scroll-mt-28 overflow-hidden bg-black px-6 py-8 sm:px-8 lg:px-0 lg:py-9">
      <div className="mx-auto w-full max-w-[81rem]">
        <EditorialRail desktopTrailing={featuredDemo.desktopTopRail} mobileTrailing={featuredDemo.mobileTopRail} />
        <DesktopComposition />
        <MobileComposition />
        <div className="mt-12 lg:mt-14">
          <EditorialRail desktopTrailing={featuredDemo.desktopBottomRail} mobileTrailing={featuredDemo.mobileBottomRail} />
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
