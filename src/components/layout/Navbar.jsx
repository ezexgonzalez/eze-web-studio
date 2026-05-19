import { siteConfig } from "../../data/siteConfig";
import Button from "../ui/Button";

const navLinks = ["Inicio", "Servicios", "Proceso", "Contacto"];

function LogoMark() {
  return (
    <span
      className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.1] bg-white/[0.035]"
      aria-hidden="true"
    >
      <span className="flex w-3.5 flex-col gap-1">
        <span className="h-px w-3.5 rounded-full bg-slate-50" />
        <span className="h-px w-2.5 rounded-full bg-cyan-300" />
        <span className="h-px w-3.5 rounded-full bg-slate-50" />
      </span>
    </span>
  );
}

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 rounded-full border border-white/[0.08] bg-black/[0.42] px-3 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-3.5 md:grid-cols-[1fr_auto_1fr]">
        <a href="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="text-sm font-semibold tracking-wide text-slate-50/95">
            {siteConfig.brandName}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-400/90 transition hover:text-slate-50"
              key={link}
            >
              {link}
            </a>
          ))}
        </div>

        <Button
          as="a"
          href="#contacto"
          className="min-h-10 justify-self-end px-4 py-2 text-xs sm:px-5 sm:text-sm"
        >
          Hablemos
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
