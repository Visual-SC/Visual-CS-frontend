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

  const totalPages = useProductStore((state) => state.totalIndexPages);
  const getProductsByCategory = useProductStore((state) => state.getProductsByCategory);

  useEffect(() => {
    getProductsByCategory(globalRoute, currentPage, totalPages);
  }, [globalRoute, currentPage, getProductsByCategory, totalPages]);

   
  return (
    <section className="tablet-large:flex flex-col max-tablet-large:mt-4">
    <article className="grid grid-cols-3 grid-rows-3 gap-4 items-center justify-center">
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
  );
};

export default ProductsByCategoryGrid;