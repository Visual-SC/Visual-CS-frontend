import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CategoriesAsideSecond = () => {
  const container = useRef<HTMLDivElement>(null);
  const timelines = useRef<gsap.core.Timeline[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
  { textA: "Diseño elegante", textB: "Diseño moderno" },
  { textA: "Rápido", textB: "Optimizado" },
  { textA: "Flexible", textB: "Escalable" },
  ];

  useGSAP(() => {
    const elements = gsap.utils.toArray(".item");

    elements.forEach((el, i) => {
      const tl = gsap.timeline({ paused: true });

      tl.to(el.querySelector(".fontA"), {
        opacity: 0,
        y: -10,
        scale: 0.98,
        filter: "blur(6px)",
        duration: 0.4,
        ease: "power3.out",
      })
        .fromTo(
          el.querySelector(".fontB"),
          {
            opacity: 0,
            y: 10,
            scale: 0.98,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
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
     <div ref={container} className="space-y-6">
    {items.map((item, index) => (
      <div
        key={index}
        className="item cursor-pointer text-3xl relative h-10"
        onClick={() => handleClick(index)}
      >
        <span className="fontA absolute inset-0">
          {item.textA}
        </span>
        <span className="fontB absolute inset-0 opacity-0">
          {item.textB}
        </span>
      </div>
    ))}
  </div>
  )
}

export default CategoriesAsideSecond;