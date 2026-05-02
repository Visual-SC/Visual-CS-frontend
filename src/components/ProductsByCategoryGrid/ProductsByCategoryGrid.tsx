import React, { useEffect } from "react";
import { useProductStore } from "../../hooks/useProducts";
import PaginationProducts from "../PaginationProducts/PaginationProducts";
import LoadingProducts from "../LoadingProducts/LoadingProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductsByCategoryGrid: React.FC = () => {
  const products = useProductStore((state) => state.products);
  const getProducts = useProductStore((state) => state.getProducts);  

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
    <article className="grid grid-cols-3 gap-4">
      {products.length === 0 ? (
        <LoadingProducts />
      ) : (
        products.slice(0, 9).map((product) => (
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