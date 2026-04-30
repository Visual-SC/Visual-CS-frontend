import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import type { CategoriesAsideProps } from "./types";
import { CategoriesAsideData } from "./data";
import { Link } from "react-router-dom";
//import { useActiveCategory } from "./useActiveCategory";


const CategoriesAside: React.FC<CategoriesAsideProps> = () => {
  const container = useRef<HTMLUListElement>(null);
  const timelines = useRef<gsap.core.Timeline[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);  

  useGSAP(() => {
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
}, { scope: container });


  const handleClick = (index: number) => {
  // si clickeas el mismo → no hacer nada (opcional)
  if (activeIndex === index) return;

  // 🔥 resetear el anterior
  if (activeIndex !== null) {
    timelines.current[activeIndex]?.reverse();
  }

  // 🔥 activar el nuevo
  timelines.current[index]?.play();

  setActiveIndex(index);
};
  
return (
    <aside className="flex flex-col gap-2 col-start-1 col-end-2">
      <ul className="flex flex-col" ref={container}>
        {CategoriesAsideData.map((item, index) => (            
              <Link 
                key={index}
                to={`/category/${item.link}`} 
                className="relative item block text-sm text-black space-y-8 w-max mt-12 first:mt-0"
                onClick={()=>handleClick(index)}
              >
                <span className="fontA absolute top-0 left-0 right-0 bottom-0">
                  {item.textA}
                </span>
                <span className="fontB absolute -top-4 left-0 right-0 bottom-0 opacity-0">
                  {item.textB}
                </span>
              </Link>
          ))}
      </ul>
    </aside>
  );
};

export default CategoriesAside;

