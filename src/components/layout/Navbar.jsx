import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import { getContactUrls } from "../../utils/contactUrls";
import Button from "../ui/Button";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { nav } = siteConfig;
  const contactUrls = getContactUrls(siteConfig.contact);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-[padding] duration-300 ease-out sm:px-6 lg:px-8 ${
        isScrolled ? "py-2.5" : "py-4"
      }`}
      ref={headerRef}
    >
      <nav
        className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 rounded-full border px-3 shadow-lg backdrop-blur-xl transition-[background-color,border-color,box-shadow,padding] duration-300 ease-out sm:px-3.5 md:grid-cols-[1fr_auto_1fr] ${
          isScrolled
            ? "border-white/[0.12] bg-black/[0.68] py-2 shadow-black/20"
            : "border-white/[0.08] bg-black/[0.42] py-2.5 shadow-black/10"
        }`}
      >
        <div className="flex items-center gap-3">
          <button
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? nav.closeMenuLabel : nav.openMenuLabel}
            className="rounded-full outline-none transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:hidden"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <LogoMark />
          </button>

          <NavLink to="/" className="hidden items-center gap-3 md:flex">
            <LogoMark />
            <span className="text-sm font-semibold tracking-wide text-slate-50/95">
              {siteConfig.brandName}
            </span>
          </NavLink>

          <NavLink
            to="/"
            className="text-sm font-semibold tracking-wide text-slate-50/95 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {siteConfig.brandName}
          </NavLink>
        </div>

        <div className="hidden items-center gap-7 md:flex">
          {nav.links.map((link) => (
            <NavLink
              to={link.to}
              className="group relative py-1 text-sm font-medium text-slate-400/90 transition-colors duration-300 ease-out hover:text-cyan-100"
              key={link.label}
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 rounded-full bg-cyan-300/80 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </NavLink>
          ))}
        </div>

        <Button
          as="a"
          href={contactUrls.whatsapp}
          onClick={() => setIsMobileMenuOpen(false)}
          rel="noreferrer"
          target="_blank"
          className="min-h-10 justify-self-end px-4 py-2 text-xs sm:px-5 sm:text-sm"
        >
          {nav.cta}
        </Button>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border shadow-lg backdrop-blur-xl transition-[max-height,opacity,transform,border-color,background-color] duration-300 ease-out md:hidden ${
          isMobileMenuOpen
            ? "max-h-80 translate-y-0 border-white/[0.1] bg-black/[0.72] opacity-100"
            : "max-h-0 -translate-y-2 border-transparent bg-black/0 opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
        id="mobile-menu"
      >
        <div className="grid gap-1 p-2">
          {nav.mobileLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-medium transition-[background-color,color] duration-300 ease-out ${
                  isActive && link.to !== "/#contacto"
                    ? "bg-cyan-300/[0.08] text-cyan-100"
                    : "text-slate-300 hover:bg-white/[0.045] hover:text-cyan-100"
                }`
              }
              key={link.label}
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
