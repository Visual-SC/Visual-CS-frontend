import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useDarkBg } from "../../utils/useDarkBg";

export const useCategoriesTabletAside = () => {
  const asideRef = useRef<HTMLElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const menuOpen = useDarkBg((state) => state.menuOpen);

  useGSAP(() => {
    if (!asideRef.current) return;

    gsap.set(asideRef.current, { xPercent: -100 });

    tlRef.current = gsap.timeline({ paused: true })
      .to(asideRef.current, {
        xPercent: 0,
        duration: 0.4,
        ease: "power2.out",
      });
  });

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (menuOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [menuOpen]);

  return { asideRef };
};
