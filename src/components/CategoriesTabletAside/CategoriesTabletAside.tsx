import React from "react";
import type { CategoriesAsideProps } from "./types";
import { CategoriesAsideData } from "./data";
import { Link } from "react-router-dom";
import { useCategoryAside } from "../CategoriesAside/useCategoryAside";
import { useCategoriesTabletAside } from "./useCategoriesTabletAside";
import { useDarkBg } from "../../utils/useDarkBg";

const CategoriesTabletAside: React.FC<CategoriesAsideProps> = () => {
  const { container, handleClickGSAP } = useCategoryAside();
  const { asideRef } = useCategoriesTabletAside();
  const { closeMenu } = useDarkBg();

  const handleClick = (index: number) => {
    handleClickGSAP(index);
    closeMenu();
  };

  return (
    <aside ref={asideRef as React.RefObject<HTMLElement>} className="bg-white w-101 h-full z-20 fixed top-0 left-0 px-4 flex flex-col tablet-large:hidden">
        <header className="h-12 relative">
          <img className="absolute left-9.5 top-0 h-full" src="/Logo-principal-Rodson-Coffee.png" alt="Logo de Rodson Coffee"/>
        </header>
       <ul className="flex flex-col mt-8" ref={container}>
            {CategoriesAsideData.map((item, index) => (            
              <Link 
                key={index}
                to={`/category/${item.link}/1`} 
                className="relative item block text-sm text-black space-y-8 w-max mt-12 first:mt-0"
                onClick={() => handleClick(index)}
              >
                <span className="fontA absolute top-0 left-0 right-0 bottom-0">
                  {item.textA}
                </span>
                <span className="fontB absolute top-0 left-0 right-0 bottom-0 opacity-0">
                  {item.textB}
                </span>
              </Link>
          ))}
       </ul>
    </aside>
  );
};

export default CategoriesTabletAside;
