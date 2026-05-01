import React from "react";
//import type { PaginationProductsProps } from "./types";
import { PaginationProductsData } from "./data";


const PaginationProducts: React.FC = () => {
  const [pagIndex, setPageIndex] = React.useState<number>(1); 

  const handleIncrementPage = () => {
    setPageIndex((prevPage) => Math.min(prevPage + 1, PaginationProductsData.length));
  };

  const handleDecrementPage = () => {
    setPageIndex((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <section className="flex items-center col-start-2 col-end-3 h-11 justify-self-center">
      <button
        className="mr-6 h-11 w-11 rounded-full bg-glacier-blue inline-flex items-center justify-center"
        onClick={handleDecrementPage}
      >
        <img src="/left-arrow.svg" />
      </button>
      <div className="flex items-center justify-center space-x-2 h-full">
        {PaginationProductsData.map((item) => {
          const isActive = item.page === pagIndex;
          return (
            <button
              key={item.page}
              className={`h-full w-8 transition-all duration-300 
              ${isActive ? 'text-h3-24 font-semibold' : 'text-h4-20 font-regular'}`}
              onClick={() => setPageIndex(item.page)}
            >
              {item.page}
            </button>
          );
        })}
      </div>
      <button
        className="ml-6 h-11 w-11 rounded-full bg-glacier-blue inline-flex items-center justify-center"
        onClick={handleIncrementPage}
      >
        <img src="/right-arrow.svg" />
      </button>
    </section>
  );
};

export default PaginationProducts;

{/**<PaginationProductsProps> */}

{/**
 

    */}