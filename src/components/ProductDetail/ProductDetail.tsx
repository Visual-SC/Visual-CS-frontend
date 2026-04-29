import React from "react";
import type { ProductDetailProps } from "./types";
import { ProductDetailData } from "./data";

const ProductDetail: React.FC<ProductDetailProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">ProductDetail</h2>

      {ProductDetailData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
