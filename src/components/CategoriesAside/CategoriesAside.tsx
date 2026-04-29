import React from "react";
import type { CategoriesAsideProps } from "./types";
import { CategoriesAsideData } from "./data";

const CategoriesAside: React.FC<CategoriesAsideProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">CategoriesAside</h2>

      {CategoriesAsideData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default CategoriesAside;
