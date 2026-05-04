import React from "react";
import type { CategoriesAsideProps } from "./types";
import { CategoriesAsideData } from "./data";
import { Link } from "react-router-dom";
import { useCategoryAside } from "./useCategoryAside";

const CategoriesAside: React.FC<CategoriesAsideProps> = () => {
  const { container, handleClickGSAP } = useCategoryAside();

  const handleClick = (index: number) => {
    handleClickGSAP(index);
  }

  return (
    <aside className="flex flex-col gap-2 col-start-1 col-end-2">
      <ul className="flex flex-col" ref={container}>
        {CategoriesAsideData.map((item, index) => (            
              <Link 
                key={index}
                to={`/category/${item.link}/1`} 
                className="relative item block text-sm text-black space-y-8 w-max mt-12 first:mt-0"
                onClick={()=>handleClick(index)}
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

export default CategoriesAside;

