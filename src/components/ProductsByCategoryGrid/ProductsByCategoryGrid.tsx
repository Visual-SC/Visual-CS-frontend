import React, { useEffect } from "react";
import { useProductStore } from "../../hooks/useProducts";
import PaginationProducts from "../PaginationProducts/PaginationProducts";
import LoadingProducts from "../LoadingProducts/LoadingProducts";
import ProductCard from "../ProductCard/ProductCard";
import { useRouteStore } from "../../hooks/useRouteStore";


const ProductsByCategoryGrid: React.FC = () => {
  const globalRoute = useRouteStore((state) => state.currentRoute);
  const currentPage = useRouteStore((state) => state.currentPage);
  const productsByCategory = useProductStore((state) => state.productsByCategory);
  const cellphoneCategory = useRouteStore((state) => state.cellphoneCategory);

  const totalPages = useProductStore((state) => state.totalIndexPages);
  const getProductsByCategory = useProductStore((state) => state.getProductsByCategory);

  useEffect(() => {
    getProductsByCategory(globalRoute, currentPage, totalPages);
  }, [globalRoute, currentPage, getProductsByCategory, totalPages]);

   
  return (
    <>
    <h1 className="font-antonio text-h1-32 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)]
     text-glacier-blue tablet-large:hidden">{cellphoneCategory}</h1>
    <section className="tablet-large:flex flex-col max-tablet-large:mt-4 max-cellphone:w-full">
    <article className="grid grid-cols-3 grid-rows-3 gap-4 items-center justify-center max-cellphone:grid-cols-1">
      {productsByCategory.length === 0 ? (
        <LoadingProducts />
      ) : (
        productsByCategory.map((product, index) => (
          <ProductCard
            key={`${product.categoria}-${product.nombre}-${index}`}
            nombre={product.nombre} 
            precio={product.precio}
            _id={product._id}
          />
        ))
      )}
    </article>
    <PaginationProducts />  
    </section>
    </>
  );
};

export default ProductsByCategoryGrid;