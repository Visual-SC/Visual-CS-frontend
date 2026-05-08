import React from "react";
import { PaginationProductsData } from "./data";
import { useProductStore } from "../../hooks/useProducts";
import type { PaginationData } from "./types";
import { useRouteStore } from "../../hooks/useRouteStore";

const PaginationProducts: React.FC = () => {
  const [totalPagesIndex, setTotalPagesIndex] = React.useState<PaginationData[]>([]);
  const totalIndexPages = useProductStore((state) => state.totalIndexPages);
  const globalRoute = useRouteStore((state) => state.currentRoute);
  const currentPage = useRouteStore((state) => state.currentPage);
  const setRoute = useRouteStore((state) => state.setRoute);

  React.useEffect(() => {
    const pages = Array.from({ length: totalIndexPages }, (_, i) => ({ page: i + 1 }));
    setTotalPagesIndex(pages);
  }, [totalIndexPages]);

  const handleIncrementPage = () => {
    const resolvedCategory = globalRoute || "base_de_espresso";
    const nextPage = Math.min(currentPage + 1, PaginationProductsData.length);
    if(nextPage > 1 && nextPage <= totalIndexPages){
      setRoute(`/category/${resolvedCategory}/${nextPage}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDecrementPage = () => {
    const resolvedCategory = globalRoute || "base_de_espresso";
    const prevPage = Math.max(currentPage - 1, 1);
    if(prevPage >= 1 && prevPage <= totalIndexPages){
      setRoute(`/category/${resolvedCategory}/${prevPage}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if(totalPagesIndex.length > 1) {
    return (
    <section className="flex items-center justify-center h-11 w-full mt-6">
      <button
        className="mr-6 h-11 w-11 rounded-full bg-glacier-blue inline-flex items-center justify-center"
        onClick={handleDecrementPage}
      >
        <img src="/left-arrow.svg" />
      </button>
      <div className="flex items-center justify-center space-x-2 h-full">
        {totalPagesIndex.map((item) => {
          const isActive = item.page === currentPage;
          return (
            <button
              key={item.page}
              className={`h-full w-8 transition-all duration-300 
              ${isActive ? 'text-h3-24 font-semibold' : 'text-h4-20 font-regular'}`}
              onClick={() => {
                const resolvedCategory = globalRoute || "base_de_espresso";
                setRoute(`/category/${resolvedCategory}/${item.page}`);
              }}
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
  }else{
    return (
      <section className="flex items-center justify-center h-11 w-full mt-6">
        <div className="flex items-center justify-center space-x-2 h-full">
        {totalPagesIndex.map((item) => {
          const isActive = item.page === currentPage;
          return (
            <button
              key={item.page}
              className={`h-full w-8 transition-all duration-300 
              ${isActive ? 'text-h3-24 font-semibold' : 'text-h4-20 font-regular'}`}
              onClick={() => {
                
                const resolvedCategory = globalRoute || "base_de_espresso";
                setRoute(`/category/${resolvedCategory}/${item.page}`);
              }}
            >
              {item.page}
            </button>
          );
        })}
      </div>
      </section>
    )
  }

  
};

export default PaginationProducts;