import React from "react";
import type { HeaderImageLink } from "./types";
import { useDarkBg } from "../../utils/useDarkBg";
import { Link } from "react-router-dom";
import { useOrderStore } from "../../hooks/useOrder";

const CartItem: React.FC<HeaderImageLink> = ({description, link, image, alt}) => {
  const currentOrder = useOrderStore((state) => state.order);
  const orderCount = currentOrder?.items?.length;
  const { openCart } = useDarkBg();

  const showDarkBg = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    openCart();
  }

  return (
   <li>
    <Link to={link} className="flex items-center w-9 h-9 relative" aria-label={`Ir a ${description}`} onClick={showDarkBg}>
      <img src={image} alt={alt} className="h-10 w-auto" />
      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-medium-blue 
      text-center text-p-12 font-semibold flex items-center justify-center">
        {orderCount}
      </div>
    </Link>
   </li>
  );
};

export default CartItem;
