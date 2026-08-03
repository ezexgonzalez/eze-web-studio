import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiBarChart2,
  FiEdit3,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
  FiPhone,
  FiZap,
} from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

function StageHeader({ description, number, title }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] grid-rows-[auto_auto] gap-x-3 xl:grid-cols-1 xl:grid-rows-[2rem_2rem_5.75rem] xl:gap-x-0">
      <span className="col-start-1 row-start-1 text-sm font-semibold text-cyan-200/90 xl:col-start-1 xl:row-start-1">
        {number}
      </span>
      <h3 className="col-start-2 row-start-1 text-base font-semibold text-slate-50 xl:col-start-1 xl:row-start-2">
        {title}
      </h3>
      <p className="col-span-2 row-start-2 mt-2 text-sm leading-6 text-slate-400 xl:col-span-1 xl:row-start-3 xl:mt-0">
        {description}
      </p>
    </div>
  );
}

function MobileStageRail() {
  return (
    <div className="grid h-full grid-rows-[1.5rem_1fr] justify-items-center xl:hidden">
      <span className="h-4 w-4 rounded-full border border-cyan-300/50 bg-cyan-300/10" />
      <span className="h-full w-px bg-cyan-300/25" />
    </div>
  );
}

function Stage({
  children,
  description,
  number,
  resourceClassName = "",
  title,
  withMobileGap = false,
}) {
  return (
    <article className="col-span-2 grid grid-cols-subgrid xl:col-span-1 xl:block">
      <MobileStageRail />
      <div
        className={`grid xl:grid-rows-[9.75rem_390px] ${
          withMobileGap ? "pb-14 xl:pb-0" : ""
        }`}
      >
        <StageHeader
          description={description}
          number={number}
          title={title}
        />
        <div className={`mt-5 xl:mt-0 ${resourceClassName}`}>{children}</div>
      </div>
    </article>
  );
}

function DesktopConnector() {
  return (
    <div className="hidden grid-rows-[2rem_2rem_5.75rem_390px] px-3 xl:grid">
      <div className="row-start-2 grid grid-cols-[1fr_auto] items-center text-cyan-300/70">
        <span className="h-px bg-cyan-300/55" />
        <span className="text-lg leading-none">›</span>
      </div>
    </div>
  );
}

function LandingMockup() {
  const services = [
    { icon: FiZap, label: "Landing pages" },
    { icon: FiEdit3, label: "Diseño a medida" },
    { icon: FiBarChart2, label: "Enfoque en resultados" },
  ];

  return (
    <div className="w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.025] xl:h-[370px] xl:max-w-[420px]">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-white/[0.08] px-4 py-3">
        <span className="text-[13px] font-semibold text-slate-50">Tu Marca</span>
        <nav className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
          <span>Inicio</span>
          <span>Servicios</span>
          <span className="hidden sm:inline">Sobre mí</span>
          <span className="hidden sm:inline">Contacto</span>
        </nav>
        <span className="rounded-md border border-white/[0.1] px-2 py-1.5 text-[11px] font-medium text-slate-200">
          Hablemos
        </span>
      </div>

      <div className="grid gap-3 px-5 py-5">
        <h4 className="max-w-sm text-lg font-semibold leading-6 text-slate-50">
          Diseño de landing pages que generan consultas
        </h4>
        <p className="max-w-sm text-[13px] leading-5 text-slate-400">
          Páginas simples, rápidas y pensadas para convertir visitantes en
          clientes.
        </p>
        <span className="inline-flex w-fit items-center gap-2 rounded-md bg-cyan-300 px-3 py-2 text-[13px] font-semibold text-black">
          <FaWhatsapp className="text-sm" />
          Hablemos por WhatsApp
        </span>
      </div>

      <div className="border-t border-white/[0.08] px-5 py-4">
        <h5 className="text-[13px] font-semibold text-slate-100">Servicios</h5>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {services.map(({ icon: Icon, label }) => (
            <div className="grid gap-2" key={label}>
              <Icon className="text-sm text-cyan-200/85" />
              <span className="text-[11px] font-medium leading-4 text-slate-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactMockup() {
  const contactDetails = [
    { icon: FiMail, label: "hola@tumarca.com" },
    { icon: FiPhone, label: "+54 11 1234 5678" },
    { icon: FiMapPin, label: "Buenos Aires, Argentina" },
  ];

  return (
    <div className="grid w-full max-w-[340px] gap-4 rounded-2xl border border-white/[0.1] bg-white/[0.025] p-5 xl:h-[290px] xl:w-[312px] xl:max-w-none">
      <div className="grid justify-items-center gap-3 text-center">
        <FaWhatsapp className="text-4xl text-cyan-300" />
        <h4 className="text-lg font-semibold text-slate-50">
          Hablemos por WhatsApp
        </h4>
        <span className="w-full rounded-md bg-cyan-300 px-4 py-2.5 text-[13px] font-semibold text-black">
          Escribime por WhatsApp
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <span className="h-px bg-white/[0.08]" />
        <span className="text-[11px] font-medium text-slate-400">
          Otros medios
        </span>
        <span className="h-px bg-white/[0.08]" />
      </div>

      <div className="grid gap-2.5">
        {contactDetails.map(({ icon: Icon, label }) => (
          <div className="flex items-center gap-2.5" key={label}>
            <Icon className="text-sm text-cyan-200/75" />
            <span className="text-[11px] text-slate-300">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  const steps = [
    { icon: FiMessageCircle, label: "Charlamos de tu negocio" },
    { icon: FiEdit3, label: "Diseñamos tu landing" },
    { icon: FiBarChart2, label: "Publicamos y medimos" },
  ];

  return (
    <div className="grid aspect-[232/390] w-[76%] max-w-[240px] justify-self-center rounded-[2.25rem] border border-white/[0.14] bg-white/[0.035] p-2 xl:h-[390px] xl:w-[232px] xl:max-w-none">
      <div className="grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-black">
        <div className="flex justify-center py-2">
          <span className="h-1 w-10 rounded-full bg-white/[0.12]" />
        </div>

        <div className="grid content-start px-4 pb-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[13px] font-semibold text-slate-50">
              Tu Marca
            </span>
            <FiMenu className="text-base text-slate-300" />
          </div>

          <div className="grid gap-3 py-4">
            <h4 className="text-base font-semibold leading-5 text-slate-50">
              Diseñamos landings pensadas para convertir.
            </h4>
            <p className="text-[13px] leading-5 text-slate-400">
              Simples, rápidas y efectivas.
            </p>
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-3 py-2 text-[11px] font-semibold text-black">
              <FaWhatsapp className="text-sm" />
              Hablemos por WhatsApp
            </span>
          </div>

          <div className="border-t border-white/[0.08] pt-4">
            <h5 className="text-[13px] font-semibold text-slate-100">
              Cómo trabajamos
            </h5>
            <div className="mt-3 grid gap-3">
              {steps.map(({ icon: Icon, label }) => (
                <div className="flex items-center gap-2.5" key={label}>
                  <Icon className="text-sm text-cyan-200/75" />
                  <span className="text-[11px] font-medium text-slate-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-5 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 xl:px-12 xl:pb-[120px] xl:pt-32"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.14] to-transparent" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 -translate-x-1/3 rounded-full bg-cyan-300/[0.04] blur-3xl" />

      <Reveal className="mx-auto w-full max-w-[1240px]">
        <div className="text-center">
          <p className="mb-6 inline-flex rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.06] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
            {includes.eyebrow}
          </p>
          <h2 className="mx-auto max-w-[760px] text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-[2.75rem]">
            {includes.title}
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {includes.description}
          </p>
        </div>

        <div className="mt-[68px] grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 xl:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)_96px_minmax(0,1fr)] xl:gap-x-0">
          <Stage
            description={includes.groups[0].description}
            number="01"
            resourceClassName="xl:grid xl:place-items-center"
            title={includes.groups[0].title}
            withMobileGap
          >
            <LandingMockup />
          </Stage>

          <DesktopConnector />

          <Stage
            description={includes.groups[1].description}
            number="02"
            resourceClassName="xl:grid xl:place-items-center"
            title={includes.groups[1].title}
            withMobileGap
          >
            <ContactMockup />
          </Stage>

          <DesktopConnector />

          <Stage
            description={includes.groups[2].description}
            number="03"
            resourceClassName="grid xl:place-items-center"
            title={includes.groups[2].title}
          >
            <PhoneMockup />
          </Stage>
        </div>

        <div className="mt-14 flex justify-center xl:mt-16">
          <Button
            as={Link}
            to="/packs"
            variant="secondary"
            className="w-full max-w-[248px] sm:w-auto"
          >
            {includes.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default IncludesSection;
