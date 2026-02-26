import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);
export default function Menu() {
const [isSerif, setIsSerif] = useState(false);
const containerRef = useRef<HTMLUListElement|null>(null);

useGSAP(()=>{
    const state = Flip.getState(".link-text");
     Flip.from(state, {
      duration: 0.6,
      ease: "power2.inOut",
      // Evita que el texto cambie de posición bruscamente si el ancho varía
      absolute: false, 
      scale: true
    });
}, {dependencies: [isSerif], scope: containerRef })

  return (
    <main className="grid grid-cols-[375px_1fr]">
      <aside>
        <ul ref={containerRef} onClick={()=>setIsSerif(!isSerif)}>
            <li style={{
                  fontSize: '3rem',
            textDecoration: 'none',
            color: '#333',
            // Cambiamos la fuente basado en el estado
            fontFamily: isSerif ? "'Playfair Display', serif" : "'Inter', sans-serif",
            display: 'inline-block' 
            }}>Base de expreso</li>
        </ul>
      </aside>
      <section>Main</section>
    </main>
  )
}
