import React from "react";
import type { OrderConfirmationFloatingProps } from "./types";
import { OrderConfirmationFloatingData } from "./data";

const OrderConfirmationFloating: React.FC<OrderConfirmationFloatingProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">OrderConfirmationFloating</h2>

      {OrderConfirmationFloatingData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default OrderConfirmationFloating;
