"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { setLenis, scrollToHash } from "@/lib/lenis";

/* Single rAF loop: Lenis drives ScrollTrigger.
   Also owns in-page anchor scrolling for the whole site, so every link
   (nav, hero CTAs, footer, and anything we add later) lands below the header. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    if (!prefersReducedMotion()) {
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);
    }

    /* delegated: catches every same-page anchor on the site */
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
        return;
      const link = (e.target as Element)?.closest?.<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;
      
      const isHash = href.startsWith("#");
      const isAbsoluteHash = href.startsWith("/#");
      
      if (!isHash && !isAbsoluteHash) return;
      if (!link) return;
      
      /* Only intercept if the hash belongs to the current pathname.
         If it's /#something and we are not on /, let Next.js handle the cross-route transition. */
      const url = new URL(link.href);
      if (url.pathname === window.location.pathname && url.hash) {
        e.preventDefault();
        scrollToHash(url.hash);
      }
    };
    document.addEventListener("click", onClick);

    /* honour a hash present on first load */
    if (window.location.hash) {
      const hash = window.location.hash;
      requestAnimationFrame(() => setTimeout(() => scrollToHash(hash), 60));
    }

    return () => {
      document.removeEventListener("click", onClick);
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
}
