"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: gsap.TweenVars
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...options,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options]);

  return ref;
}