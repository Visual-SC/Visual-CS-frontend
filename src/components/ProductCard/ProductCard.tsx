import React from "react";
import type { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({ nombre, precio }) => {

const formatPrice = (price: number): string => {
  return price.toLocaleString("es-CO", { style: "currency", currency: "COP" }).replace("COP", "").trim();
};

  return (
    <div className="flex flex-col">
      <figure className="flex items-center justify-center relative rounded-full bg-peach-cream h-28 w-28 mx-auto">
        <img src="/a-cup-of-coffee-free-png.png" alt={nombre} className="w-18 h-18" />  
      </figure>
      <h2 className="text-p-16 font-semibold mt-1">{nombre}</h2>
      <h3 className="text-p-16 font-semibold mt-1">{formatPrice(precio)}</h3>
    </div>
  );
};

export default ProductCard;
