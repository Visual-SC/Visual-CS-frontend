import React, { useState } from "react";
import { useDarkBg } from "../../utils/useDarkBg";


const BurguerButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleBg } = useDarkBg();
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    toggleBg();
  } 

  return (
    <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          className="relative flex items-center justify-center w-9 h-9 p-1 z-30 tablet-large:hidden"
        >
          <div
            className={`absolute left-1 right-1 h-1 bg-black rounded-full transition-all duration-300 ease-in-out ${
              isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2.5 rotate-0"
            }`}
          ></div>
          <div
            className={`absolute left-1 right-1 h-1 bg-black rounded-full transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`absolute left-1 right-1 h-1 bg-black rounded-full transition-all duration-300 ease-in-out ${
              isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2.5 rotate-0"
            }`}
          ></div>
        </button>
  );
};

export default BurguerButton;
