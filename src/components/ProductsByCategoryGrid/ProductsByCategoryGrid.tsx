import React from "react";
import type { ProductsByCategoryGridProps } from "./types";
import { ProductsByCategoryGridData } from "./data";

const ProductsByCategoryGrid: React.FC<ProductsByCategoryGridProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">ProductsByCategoryGrid</h2>

      {ProductsByCategoryGridData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default ProductsByCategoryGrid;
