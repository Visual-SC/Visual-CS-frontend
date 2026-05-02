import React from "react";
import { useShoppingCarProduct } from "./useShoppingfCarProduct";
import { formatPrice } from "../../utils/formatPrice";


const ShoppingCartProduct: React.FC = () => {
  const { productCard, increaseQuantity, decreaseQuantity } = useShoppingCarProduct();

  return (
    <li className="grid grid-cols-[144px_1fr] grid-rows-[32px_32px_1fr] h-36 gap-4">
      <figure className="col-start-1 col-end-2 row-start-1 row-end-4 relative flex items-center justify-center rounded-full bg-peach-cream">
        <section className="h-9 w-9 absolute cursor-pointer right-0 top-0 bg-medium-blue rounded-full flex items-center justify-center">
          <img
            src="/ep_close-bold.svg"
            className="w-6 h-6"
            alt="quitar producto"
          />
        </section>
        <img
          src={productCard.imagen}
          className="w-18 h-18"
          alt={productCard.nombre}
        />
      </figure>

      <div className="inline-flex item-center">
        <h3 className="text-h4-20 font-semibold">{productCard.nombre}</h3>
      </div>

      <div className="inline-flex items-center font-semibold">
        <span className="font-p-18">{productCard.cantidad}X</span>
        <span className="ml-4 text-h4-20 font-antonio">
          {formatPrice(productCard.total)}
        </span>
      </div>

      <form className="w-29 inline-flex h-9 justify-evenly">
        <button
          className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center"
          onClick={decreaseQuantity}
        >
          <img
            src="/humbleicons_minus.svg"
            className="w-6 h-6"
            alt="disminuir cantidad"
          />
        </button>
        <input
          type="text"
          value={productCard.cantidad}
          className="w-8 text-center border-gray-300 rounded-md appearance-none border-none bg-transparent "
          readOnly
        />
        <button
          className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center cursor-pointer"
          onClick={increaseQuantity}
        >
          <img src="/lucide_plus.svg" className="w-6 h-6" alt="aumentar cantidad" />
        </button>
      </form>
    </li>
  );
};

export default ShoppingCartProduct;
