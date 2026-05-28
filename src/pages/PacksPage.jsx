import { siteConfig } from "../data/siteConfig";
import { getContactUrls } from "../utils/contactUrls";
import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import InfoCallout from "../components/ui/InfoCallout";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";

function PackCard({ pack, whatsappUrl, delay = 0 }) {
  return (
    <Reveal className="h-full" delay={delay}>
      <GlassCard
        className={`relative flex h-full flex-col overflow-hidden p-5 transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 sm:p-6 ${
          pack.recommended
            ? "border-cyan-300/[0.28] bg-cyan-300/[0.06] shadow-[0_0_0_1px_rgba(34,211,238,0.035),0_22px_76px_rgba(34,211,238,0.075)]"
            : "border-white/[0.09] bg-white/[0.035]"
        }`}
      >
        {pack.recommended && (
          <>
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <span className="mb-4 w-fit rounded-full border border-cyan-300/[0.2] bg-cyan-300/[0.08] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-100">
              Recomendado
            </span>
          </>
        )}

        <div className="border-b border-white/[0.075] pb-5">
          <h2 className="text-xl font-semibold tracking-[-0.015em] text-slate-50">
            {pack.title}
          </h2>
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
          href={whatsappUrl}
          variant={pack.recommended ? "primary" : "secondary"}
          className="mt-7 w-full"
          rel="noreferrer"
          target="_blank"
        >
          {pack.cta}
        </Button>
      </GlassCard>
    </Reveal>
  );
}

function PacksPage() {
  const { contact, packsPage } = siteConfig;
  const contactUrls = getContactUrls(contact);
  const { finalCta, quoteNotes } = packsPage;

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.09),transparent_30%),linear-gradient(180deg,#000000_0%,#02040a_100%)]" />
      <div className="absolute inset-x-8 top-28 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.14] to-transparent" />

      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="max-w-3xl">
          <PageHero
            eyebrow={packsPage.eyebrow}
            title={packsPage.title}
            description={packsPage.description}
          />
        </Reveal>

        <div className="mt-10 grid items-stretch gap-4 lg:mt-12 lg:grid-cols-3">
          {packsPage.items.map((pack, index) => (
            <PackCard
              key={pack.title}
              pack={pack}
              whatsappUrl={contactUrls.whatsapp}
              delay={index * 90}
            />
          ))}
        </div>

        <Reveal delay={120}>
          <InfoCallout
            eyebrow={quoteNotes.eyebrow}
            title={quoteNotes.title}
            className="mt-6 overflow-hidden p-5 sm:p-6 lg:p-7"
          >
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {quoteNotes.items.map((note, index) => (
                <Reveal
                  as="article"
                  className="rounded-2xl border border-white/[0.08] bg-black/[0.22] p-4 sm:p-5"
                  delay={index * 70}
                  key={note.title}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-[0.66rem] font-semibold text-cyan-200/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.1]" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {note.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </InfoCallout>
        </Reveal>

        <Reveal delay={120}>
          <InfoCallout className="mt-6 grid gap-5 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
            <p className="text-base leading-7 text-slate-200">
              {finalCta.text}
            </p>
            <Button
              as="a"
              href={contactUrls.whatsapp}
              className="w-full md:w-auto"
              rel="noreferrer"
              target="_blank"
            >
              {finalCta.buttonLabel}
            </Button>
          </InfoCallout>
        </Reveal>
      </div>
    </section>
  );
}

export default PacksPage;
