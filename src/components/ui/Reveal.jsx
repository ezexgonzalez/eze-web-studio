import { useEffect, useRef, useState } from "react";

function Reveal({ as: Component = "div", children, className = "", delay = 0, threshold = 0.16 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window);
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return undefined;

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsVisible(true);
      observer.unobserve(entry.target);
    }, { rootMargin: "0px 0px -8% 0px", threshold });

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return (
    <Component className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`} ref={ref} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </Component>
  );
}

export default Reveal;
