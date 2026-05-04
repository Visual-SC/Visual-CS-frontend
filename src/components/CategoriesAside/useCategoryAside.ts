import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
import { CategoriesAsideData } from "./data";

export const useCategoryAside = () =>{
    const container = useRef<HTMLUListElement>(null);
    const timelines = useRef<gsap.core.Timeline[]>([]);
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isGsapReady, setIsGsapReady] = useState(false);

    const resolveIndexFromPath = (pathname: string): number | null => {
      if (pathname === "/") return 0;

      const match = pathname.match(/^\/category\/([^/]+)(?:\/\d+)?$/);
      if (!match) return null;

      const categorySlug = decodeURIComponent(match[1]);
      const foundIndex = CategoriesAsideData.findIndex((item) => item.link === categorySlug);

      return foundIndex === -1 ? null : foundIndex;
    };

    const activateIndex = (index: number) => {
      if (activeIndex === index) return;

      if (activeIndex !== null) {
        timelines.current[activeIndex]?.reverse();
      }

      timelines.current[index]?.play();
      setActiveIndex(index);
    };

    useGSAP(() => {
    timelines.current = [];
    const elements = gsap.utils.toArray<HTMLElement>(".item");

    elements.forEach((el, i) => {
        const fontA = el.querySelector<HTMLElement>(".fontA");
        const fontB = el.querySelector<HTMLElement>(".fontB");

    if (!fontA || !fontB) return;

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },

      // 🔁 Reset limpio al hacer reverse
      onReverseComplete: () => {
        gsap.set(fontA, { display: "block", opacity: 1 });
        gsap.set(fontB, { display: "none", opacity: 0 });
      },
    });

    tl
      // 🔴 1. A desaparece COMPLETAMENTE
      .to(fontA, {
        opacity: 0,
        scale: 0.98,
        filter: "blur(2px)",
        duration: 0.3,
      })

      // 🧠 2. Eliminamos A del DOM visual
      .set(fontA, { display: "none" })

      // 🧠 3. Preparamos B (sin solapamiento)
      .set(fontB, { display: "block" })

      // 🟢 4. Aparece B (clean replace)
      .fromTo(
        fontB,
        {
          opacity: 0,
          scale: 0.98,
          filter: "blur(2px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
        }
      );

    timelines.current[i] = tl;
  });
    setIsGsapReady(true);
    }, { scope: container });

    useEffect(() => {
      if (!isGsapReady) return;

      const routeIndex = resolveIndexFromPath(location.pathname);
      if (routeIndex === null) return;

      activateIndex(routeIndex);
    }, [location.pathname, isGsapReady, activeIndex]);

    const handleClickGSAP = (index: number) => {
    activateIndex(index);
    };

    return {
        container,
        handleClickGSAP,
    }
}