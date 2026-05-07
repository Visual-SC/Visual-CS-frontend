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
    <Link to={link} className="flex items-center w-9 h-9 max-tablet-large:w-8 max-tablet-large:h-8  relative" aria-label={`Ir a ${description}`} onClick={showDarkBg}>
      <img src={image} alt={alt} className="h-10 w-auto" />
      <div className="absolute -top-1.5 -right-1.5 max-tablet-large:-right-1 max-tablet-large:-top-1 w-5 h-5 max-tablet-large:w-4 max-tablet-large:h-4 max-tablet-large: rounded-full bg-medium-blue 
      text-center text-p-12  max-tablet-large:text-[10px] font-semibold flex items-center justify-center">
        {orderCount}
      </div>
    </Link>
   </li>
  );
};

export default CartItem;
