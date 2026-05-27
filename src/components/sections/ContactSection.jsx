import { siteConfig } from "../../data/siteConfig";
import { getContactUrls } from "../../utils/contactUrls";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

function ContactSection() {
  const { contact } = siteConfig;
  const contactUrls = getContactUrls(contact);

  return (
    <section
      id="contacto"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/[0.06] blur-3xl" />

      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/[0.18] bg-cyan-300/[0.055] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.45),0_0_48px_rgba(34,211,238,0.07)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-cyan-300/[0.18] bg-black/[0.24] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/95">
                {contact.eyebrow}
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-50 sm:text-4xl lg:text-5xl">
                {contact.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {contact.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                as="a"
                href={contactUrls.whatsapp}
                className="w-full"
                rel="noreferrer"
                target="_blank"
              >
                {contact.primaryCta}
              </Button>
              <Button
                as="a"
                href={contactUrls.instagram}
                variant="secondary"
                className="w-full"
                rel="noreferrer"
                target="_blank"
              >
                {contact.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-black/[0.24] p-4 sm:p-5">
            <p className="text-sm leading-6 text-slate-300">{contact.guide}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ContactSection;
