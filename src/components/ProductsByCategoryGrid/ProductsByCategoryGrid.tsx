import React, { useEffect } from "react";
import { useProductStore } from "../../hooks/useProducts";
import PaginationProducts from "../PaginationProducts/PaginationProducts";
import LoadingProducts from "../LoadingProducts/LoadingProducts";
import ProductCard from "../ProductCard/ProductCard";
import { useRouteStore } from "../../hooks/useRouteStore";


const ProductsByCategoryGrid: React.FC = () => {
  const globalRoute = useRouteStore((state) => state.currentRoute);
  const productsByCategory = useProductStore((state) => state.productsByCategory);
  const getProductsByCategory = useProductStore((state) => state.getProductsByCategory);

  useEffect(() => {
    getProductsByCategory(globalRoute);
  }, [globalRoute, getProductsByCategory]);

  return (
    <>
    <article className="grid grid-cols-3 gap-4">
      {productsByCategory.length === 0 ? (
        <LoadingProducts />
      ) : (
        productsByCategory.slice(0, 9).map((product) => (
          <ProductCard
            key={product.nombre}
            nombre={product.nombre} 
            precio={product.precio}
          />
        ))
      )}
    </article>
    <PaginationProducts />  
    </>
  );
};

export default ProductsByCategoryGrid;