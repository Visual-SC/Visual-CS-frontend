import React from "react";
import type { CategoriesAsideProps } from "./types";
import { CategoriesAsideData } from "./data";
import { Link } from "react-router-dom";

const CategoriesTabletAside: React.FC<CategoriesAsideProps> = () => {
  return (
    <aside className="bg-white w-130 z-20 fixed h-full top-0 left-0 p-4 flex flex-col">
       <ul className="flex flex-col">
            {CategoriesAsideData.map((item, index) => (            
              <Link 
                key={index}
                to={`/category/${item.link}/1`} 
                className="relative item block text-sm text-black space-y-8 w-max mt-12 first:mt-0"
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
