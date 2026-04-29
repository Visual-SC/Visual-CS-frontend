import React from "react";
import type { OrderCreatedProps } from "./types";
import { OrderCreatedData } from "./data";

const OrderCreated: React.FC<OrderCreatedProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">OrderCreated</h2>

      {OrderCreatedData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default OrderCreated;
