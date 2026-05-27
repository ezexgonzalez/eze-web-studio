import { useEffect, useRef, useState } from "react";

function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  threshold = 0.16,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export default Reveal;
