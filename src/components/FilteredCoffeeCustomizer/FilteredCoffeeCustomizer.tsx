import React from "react";
import type { FilteredCoffeeCustomizerProps } from "./types";
import { FilteredCoffeeCustomizerData } from "./data";

const FilteredCoffeeCustomizer: React.FC<FilteredCoffeeCustomizerProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">FilteredCoffeeCustomizer</h2>

      {FilteredCoffeeCustomizerData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default FilteredCoffeeCustomizer;
