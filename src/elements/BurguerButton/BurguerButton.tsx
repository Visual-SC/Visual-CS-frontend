import { type JSX } from "react";
import type { BurguerButtonProps } from "./types";

export default function BurguerButton({ toggleMenu, asideHeader }: BurguerButtonProps):JSX.Element {  
  return (
    <button
      onClick={toggleMenu}
      className="fixed  top-2 left-2 flex justify-center items-center w-6 h-7 cursor-pointer z-30 horizontal-tablet:hidden"
      aria-label="Toggle menu"
    >
      {/* Línea superior */}
      <span
        className={`absolute top-0 bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          asideHeader ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-1 translate-y-0'
        }`}
      ></span>

      {/* Línea del medio */}
      <span
        className={`absolute bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          asideHeader ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      ></span>

      {/* Línea inferior */}
      <span
        className={`absolute bottom-1 bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          asideHeader ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-1 translate-y-0'
        }`}
      ></span>
    </button>
  )
}
