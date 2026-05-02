import React from "react";
import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";
import { useDarkBg } from "../../utils/useDarkBg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ShoppingCartAside: React.FC = () => {
  const { bgVisible, closeBg } = useDarkBg();
  const asideRef = React.useRef<HTMLElement | null>(null);
  const isClosingRef = React.useRef(false);
  const closeTweenRef = React.useRef<gsap.core.Tween | null>(null);

  React.useEffect(() => {
    if (bgVisible) {
      isClosingRef.current = false;
      return;
    }

    isClosingRef.current = false;
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;
  }, [bgVisible]);

  useGSAP(
    () => {
      if (!bgVisible) return;

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
          closeBg();
        },
      });
    },
    { scope: asideRef, dependencies: [bgVisible, closeBg] }
  );

  if (!bgVisible) return null;

  const closeShoppingCartAside = (mode: "immediate" | "animated" = "animated") => {
    if (mode === "immediate") {
      isClosingRef.current = false;
      closeTweenRef.current?.kill();
      closeTweenRef.current = null;
      closeBg();
      return;
    }

    if (isClosingRef.current) return;

    const asideEl = asideRef.current;
    if (!asideEl) {
      closeBg();
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
      closeBg();
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
        closeBg();
      },
    });
  };

  return (
    <aside
      ref={asideRef}
      className="bg-white w-130 z-20 fixed h-full top-0 right-0 p-4 flex flex-col will-change-transform"
    >
      <header className="inline-flex relative items-center justify-center">
        <button
          type="button"
          className="w-6 h-6 absolute left-0 top-2 cursor-pointer"
          aria-label="Cerrar orden"
          onClick={() => closeShoppingCartAside("animated")}
        >
          <img
            src="/ep_close-bold.svg"
            className="w-full h-full"
            alt=""
          />
        </button>
        <h2 className="font-antonio text-h1-32 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">TU ORDEN</h2>
      </header>
      <ul className="flex flex-col mt-8">
        <ShoppingCartProduct />
        <h2 className="mt-4 font-antonio text-h1-32 text-center ">
          <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">TOTAL:</span>
          <span className="text-black ml-2">$9.000</span>
        </h2>
        <button className="w-62 h-12 rounded-xl bg-medium-blue text-black text-center text-p-16 font-semibold mx-auto mt-4">Confirmar orden</button>
      </ul>  
      
    </aside>
  );
};

export default ShoppingCartAside;