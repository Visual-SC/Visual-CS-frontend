import React from "react";
import type { CartItemProps } from "./types";
import { CartItemData } from "./data";

const CartItem: React.FC<CartItemProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold">CartItem</h2>

      {CartItemData.map((item) => (
        <div key={item.id} className="text-sm">
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default CartItem;
