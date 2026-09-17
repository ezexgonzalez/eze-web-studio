import { siteConfig } from "../../data/siteConfig";

function LiveDemoLink({ desktop = false }) {
  const { featuredDemo } = siteConfig;

  return (
    <a
      className={desktop
        ? "absolute left-[43.88%] top-[174px] text-[15px] font-semibold leading-none text-[#59e3ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#59e3ff]"
        : "mt-3 inline-flex text-[13px] font-semibold leading-[18px] text-[#59e3ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#59e3ff]"
      }
      href={featuredDemo.liveUrl}
      rel="noreferrer"
      target="_blank"
    >
      Ver demo en vivo <span aria-hidden="true">↗</span>
    </a>
  );
}

function BrowserPreview() {
  const { featuredDemo } = siteConfig;

  return (
    <figure className="absolute left-[6.575%] top-[243px] h-[671px] w-[64%] overflow-hidden rounded-[14px] border border-[rgba(124,145,155,0.8)] bg-[#0b0f11]">
      <div className="flex h-10 items-center gap-3 border-b border-white/[0.11] bg-[#141a1e] px-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-slate-400/80" />
          <i className="h-2.5 w-2.5 rounded-full bg-slate-400/80" />
          <i className="h-2.5 w-2.5 rounded-full bg-slate-400/80" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-black/35 px-3 py-1 text-[0.64rem] text-slate-300">
          {featuredDemo.liveUrlLabel}
        </span>
        <span aria-hidden="true" className="text-xs tracking-[0.16em] text-slate-500">•••</span>
      </div>
      <img
        alt={featuredDemo.desktopImage.alt}
        className="block h-[calc(100%-2.5rem)] w-full object-cover object-left"
        decoding="async"
        loading="lazy"
        src={featuredDemo.desktopImage.src}
      />
    </figure>
  );
}

function PhonePreview({ mobile = false }) {
  const { featuredDemo } = siteConfig;

  return (
    <figure className={mobile
      ? "absolute left-[87px] top-[332px] h-[453px] w-[216px] overflow-hidden rounded-[28px] border border-[rgba(124,145,155,0.78)] bg-[#0c1012] p-[3px] shadow-[0_16px_16px_rgba(0,0,0,0.4)]"
      : "absolute left-[73.4375%] top-[243px] h-[671px] w-[20.833%] overflow-hidden rounded-[40px] border border-[rgba(124,145,155,0.78)] bg-[#0c1012] p-[4px] shadow-[0_16px_16px_rgba(0,0,0,0.4)]"
    }>
      <img
        alt={featuredDemo.mobileImage.alt}
        className="block h-full w-full rounded-[inherit] object-cover object-left"
        decoding="async"
        loading="lazy"
        src={featuredDemo.mobileImage.src}
      />
    </figure>
  );
}

function DesktopLayout() {
  const { featuredDemo } = siteConfig;

  return (
    <div className="relative mx-auto hidden h-[1024px] w-full max-w-[1536px] lg:block">
      <p className="absolute left-[5.078%] top-[38px] text-[15px] font-medium leading-none tracking-[5.6px] text-[#f5f5f2]">EZE WEB STUDIO</p>
      <span aria-hidden="true" className="absolute left-[22.46%] top-[52px] h-px w-[47.92%] bg-[#536068]" />
      <p className="absolute left-[72.92%] top-[38px] whitespace-nowrap text-[11px] font-medium leading-none tracking-[4.1px] text-[#c2c5c7]">{featuredDemo.desktopTopRail}</p>

      <p className="absolute left-[5.14%] top-[114px] text-[13px] font-semibold leading-none tracking-[2.6px] text-[#59e3ff]">{featuredDemo.projectLabel}</p>
      <h2 className="absolute left-[5.14%] top-[140px] text-[58px] font-bold leading-[60px] tracking-[-2.2px] text-[#f5f5f2]">{featuredDemo.title}</h2>
      <span aria-hidden="true" className="absolute left-[40.69%] top-[114px] h-[92px] w-px bg-[rgba(58,66,72,0.95)]" />
      <p className="absolute left-[43.88%] top-[118px] w-[470px] text-[17px] font-normal leading-[26px] text-[#f5f5f2]">{featuredDemo.desktopDescription}</p>
      <LiveDemoLink desktop />
      <span aria-hidden="true" className="absolute left-[43.88%] top-[196px] h-px w-[168px] bg-[#59e3ff]" />

      <span aria-hidden="true" className="absolute left-[81.9%] top-[121px] h-[2px] w-[42px] bg-[#59e3ff]" />
      <p className="absolute left-[81.9%] top-[134px] text-[11px] font-semibold leading-[20px] tracking-[2.4px] text-[#c2c5c7]">{featuredDemo.desktopEditorial[0]}<br />{featuredDemo.desktopEditorial[1]}</p>

      <BrowserPreview />
      <PhonePreview />
    </div>
  );
}

function MobileLayout() {
  const { featuredDemo } = siteConfig;

  return (
    <div className="relative mx-auto h-[844px] w-[390px] max-w-full lg:hidden">
      <div className="absolute left-6 top-5 flex h-[34px] w-[342px] max-w-[calc(100%-3rem)] items-center justify-between">
        <p className="text-[10px] font-medium leading-[14px] tracking-[3.6px] text-[#f5f5f2]">EZE WEB STUDIO</p>
        <p className="w-[116px] text-right text-[7px] font-medium leading-[12px] tracking-[2.1px] text-[#858b90]">IDEAS QUE<br />IMPULSAN MARCAS</p>
      </div>

      <div className="absolute left-6 top-[76px] w-[342px] max-w-[calc(100%-3rem)]">
        <div className="flex h-4 items-center gap-[14px]">
          <p className="text-[10px] font-semibold leading-[14px] tracking-[2.1px] text-[#59e3ff]">{featuredDemo.projectLabel}</p>
          <span aria-hidden="true" className="h-px w-[72px] bg-[rgba(90,99,105,0.7)]" />
        </div>
        <h2 className="mt-3 text-[40px] font-bold leading-[40px] tracking-[-1.5px] text-[#f5f5f2]">Gimnasio<br />boutique</h2>
        <p className="mt-3 w-[320px] max-w-full text-[13px] font-normal leading-[19px] tracking-[-0.1px] text-[#c2c5c7]">{featuredDemo.mobileDescription}</p>
        <LiveDemoLink />
      </div>

      <PhonePreview mobile />
      <span aria-hidden="true" className="absolute left-6 top-[808px] h-px w-[342px] max-w-[calc(100%-3rem)] bg-[rgba(58,66,72,0.75)]" />
      <p className="absolute left-6 top-[820px] text-[7.5px] font-medium leading-[11px] tracking-[2.7px] text-[#c2c5c7]">EZE WEB STUDIO</p>
    </div>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="relative isolate scroll-mt-28 overflow-hidden bg-black">
      <DesktopLayout />
      <MobileLayout />
    </section>
  );
}

export default DemoSection;
