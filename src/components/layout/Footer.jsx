import { siteConfig } from "../../data/siteConfig";
import { getContactUrls } from "../../utils/contactUrls";

function Footer() {
  const { brandName, footer, contact } = siteConfig;
  const contactUrls = getContactUrls(contact);
  const links = [
    { label: "Instagram", href: contactUrls.instagram, external: true },
    { label: "WhatsApp", href: contactUrls.whatsapp, external: true },
    { label: "Email", href: contactUrls.email },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-wide text-slate-50">
            {brandName}
          </p>
          <p className="mt-3 text-base leading-7 text-slate-400 sm:text-sm sm:leading-6">
            {footer.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end">
          {links.map((link) => (
            <a
              className="text-sm font-medium text-slate-400 transition-colors duration-300 ease-out hover:text-cyan-100"
              href={link.href}
              key={link.label}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="border-t border-white/[0.07] pt-6 text-sm leading-6 text-slate-500 sm:text-xs md:col-span-2">
          {footer.finalText}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
