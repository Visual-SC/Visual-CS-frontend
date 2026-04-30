import React, { useEffect } from "react";
import { useProductStore } from "../../hooks/useProducts";

const ProductsByCategoryGrid: React.FC = () => {
  const products = useProductStore((state) => state.products);
  const getProducts = useProductStore((state) => state.getProducts);  

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <article className="grid grid-cols-3 gap-4">
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        products.map((product) => (
          <div
            key={product.nombre}
            className="bg-white rounded flex items-center justify-center min-h-20 text-lg font-semibold"
          >
            {product.nombre}
          </div>
        ))
      )}
    </article>
  );
};

export default ProductsByCategoryGrid;