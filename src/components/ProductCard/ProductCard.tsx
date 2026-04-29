import React from "react";
import type { ProductCardProps } from "./types";
import { ProductCardData } from "./data";

const ProductCard: React.FC<ProductCardProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">ProductCard</h2>

      {ProductCardData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
