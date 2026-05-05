import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useDarkBg } from "../../utils/useDarkBg";


export const useShoppingCartAside = () => {
  const { cartVisible, closeCart } = useDarkBg();
  const asideRef = React.useRef<HTMLElement | null>(null);
  const isClosingRef = React.useRef(false);
  const closeTweenRef = React.useRef<gsap.core.Tween | null>(null);

  React.useEffect(() => {
    if (cartVisible) {
      isClosingRef.current = false;
      return;
    }

    isClosingRef.current = false;
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;
  }, [cartVisible]);

  useGSAP(
    () => {
      if (!cartVisible) return;

      const asideEl = asideRef.current;
      if (!asideEl) return;

      gsap.killTweensOf(asideEl);
      gsap.set(asideEl, { x: 0, force3D: true });

      closeTweenRef.current = gsap.to(asideEl, {
        x: () => window.innerWidth,
        duration: 0.45,
        ease: "power2.inOut",
        overwrite: "auto",
        paused: true,
        onComplete: () => {
          isClosingRef.current = false;
          closeCart();
        },
      });
    },
    { scope: asideRef, dependencies: [cartVisible, closeCart] }
  );

  if (!cartVisible) return null;

  const closeShoppingCartAside = (mode: "immediate" | "animated" = "animated") => {
    if (mode === "immediate") {
      isClosingRef.current = false;
      closeTweenRef.current?.kill();
      closeTweenRef.current = null;
      closeCart();
      return;
    }

    if (isClosingRef.current) return;

    const asideEl = asideRef.current;
    if (!asideEl) {
      closeCart();
      return;
    }

    const rect = asideEl.getBoundingClientRect();
    const isInViewport =
      rect.width > 0 &&
      rect.height > 0 &&
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth;

    if (!isInViewport) {
      closeCart();
      return;
    }

    isClosingRef.current = true;
    const tween = closeTweenRef.current;
    if (tween) {
      tween.restart();
      return;
    }

    gsap.to(asideEl, {
      x: () => window.innerWidth,
      duration: 0.45,
      ease: "power2.inOut",
      overwrite: "auto",
      onComplete: () => {
        isClosingRef.current = false;
        closeCart();
      },
    });
  };

  return { asideRef, closeShoppingCartAside };
};