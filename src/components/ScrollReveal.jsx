"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades and slides an element in the moment it scrolls into view.
 * Unlike a mount-triggered reveal, this only fires once the element
 * is actually near the viewport — ideal for long pages where content
 * far below the fold shouldn't animate before the user gets there.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,      // milliseconds
  distance = 24,  // px the element travels while fading in
  duration = 1100, // milliseconds
  once = true,    // if false, re-animates every time it re-enters view
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Computed once, synchronously, during the first render — no effect
  // needed, so no extra render cycle and no "setState in effect" warning.
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, prefersReducedMotion]);

  const shouldShow = prefersReducedMotion || isVisible;

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? "translateY(0px)" : `translateY(${distance}px)`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}