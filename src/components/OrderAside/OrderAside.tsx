import React from "react";
import type { OrderAsideProps } from "./types";
import { OrderAsideData } from "./data";

const OrderAside: React.FC<OrderAsideProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">OrderAside</h2>

      {OrderAsideData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default OrderAside;
