import React from "react";

import type { ProductCardOrderProps } from "../../types/order-env";
import { formatPrice } from "../../utils/formatPrice";

const ShoppingCartProduct: React.FC<ProductCardOrderProps> = ({
  nombre,
  imagen,
  cantidad,
  total,
  increaseQuantity,
  decreaseQuantity,
  discardProduct,
}) => {
  const increaseProductQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    increaseQuantity();
  };

  const decreaseProductQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    decreaseQuantity();
  };

  return (
    <li className="grid grid-cols-[144px_1fr] grid-rows-[32px_32px_1fr] h-36 gap-4
    max-cellphone:grid-cols-1 max-cellphone:grid-rows-1 max-cellphone:h-auto max-cellphone:w-full max-cellphone:place-items-center">
      <figure className="col-start-1 col-end-2 row-start-1 row-end-4 relative flex items-center justify-center rounded-full bg-peach-cream
      max-cellphone:w-31 max-cellphone:h-31 max-cellphone:grid-rows-1">
        <button className="h-9 w-9 absolute cursor-pointer right-0 top-0
         bg-medium-blue rounded-full flex items-center justify-center"
         onClick={discardProduct}
         >
          <img
            src="/ep_close-bold.svg"
            className="w-6 h-6"
            alt="quitar producto"
          />
        </button>
        <img
          src={imagen}
          className="w-18 h-18"
          alt={nombre}
        />
      </figure>

      <div className="inline-flex item-center">
        <h3 className="text-h4-20 font-semibold">{nombre}</h3>
      </div>

      <div className="inline-flex items-center font-semibold">
        <span className="font-p-18">{cantidad}X</span>
        <span className="ml-4 text-h4-20 font-antonio">
          {total && formatPrice(total)}
        </span>
      </div>

      <form
        className="w-29 inline-flex h-9 justify-evenly
        max-cellphone-landscape:h-11 max-cellphone-landscape:w-full max-cellphone-landscape:justify-center max-cellphone-landscape:gap-4
        max-cellphone:h-12 max-cellphone:w-full max-cellphone:justify-center max-cellphone:gap-4 max-cellphone:mx-auto"
      >
        <button
          type="button"
          className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center
            max-cellphone-landscape:h-11 max-cellphone-landscape:w-11
            max-cellphone:h-12 max-cellphone:w-12"
          onClick={decreaseProductQuantity}
        >
          <img
            src="/humbleicons_minus.svg"
            className="w-6 h-6 max-cellphone-landscape:w-7 max-cellphone-landscape:h-7 max-cellphone:w-7 max-cellphone:h-7"
            alt="disminuir cantidad"
          />
        </button>
        <input
          type="text"
          value={cantidad}
          className="w-8 text-center border-gray-300 rounded-md appearance-none border-none bg-transparent
            max-cellphone-landscape:w-12 max-cellphone-landscape:text-lg max-cellphone:w-12 max-cellphone:text-lg"
          readOnly
        />
        <button
          type="button"
          className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center cursor-pointer
            max-cellphone-landscape:h-11 max-cellphone-landscape:w-11
            max-cellphone:h-12 max-cellphone:w-12"
          onClick={increaseProductQuantity}
        >
          <img src="/lucide_plus.svg" className="w-6 h-6 max-cellphone-landscape:w-7 max-cellphone-landscape:h-7 max-cellphone:w-7 max-cellphone:h-7" alt="aumentar cantidad" />
        </button>
      </form>
    </li>
  );
};

export default ShoppingCartProduct;
