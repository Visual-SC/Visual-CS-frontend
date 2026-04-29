import React from "react";
import type { EspressoCustomizerProps } from "./types";
import { EspressoCustomizerData } from "./data";

const EspressoCustomizer: React.FC<EspressoCustomizerProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">EspressoCustomizer</h2>

      {EspressoCustomizerData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default EspressoCustomizer;
