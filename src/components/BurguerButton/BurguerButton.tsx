import React from "react";
import { useDarkBg } from "../../utils/useDarkBg";


const BurguerButton: React.FC = () => {
  const { menuOpen, openMenu, closeMenu } = useDarkBg();

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          className="relative flex items-center justify-center w-9 h-9 p-1 z-30 tablet-large:hidden"
        >
          <div
            className={`absolute left-1 right-1 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2.5 rotate-0"
            }`}
          ></div>
          <div
            className={`absolute left-1 right-1 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`absolute left-1 right-1 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2.5 rotate-0"
            }`}
          ></div>
        </button>
  );
};

export default BurguerButton;
