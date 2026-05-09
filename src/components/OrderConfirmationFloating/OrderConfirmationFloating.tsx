import React, { useMemo } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useProductStore } from "../../hooks/useProducts";
import { useDarkBg } from "../../utils/useDarkBg";
import type { FloatingContentProps } from "./types";
import { useOrderStore } from "../../hooks/useOrder";
import { useUiStore } from "../../stores/uiStore";
import { useConfirnmationFloating } from "./UseConfirmationFloating";

const OrderConfirmationFloatingContent: React.FC<FloatingContentProps> = ({
  productById,
  closeOrder,
  createOrder,
  showAddedToast
}) => {
  const {
    cantidad,
    categorieLabel,
    total,
    productOrder,
    handleIncrementTotal,
    handleDecrementTotal
  } = useConfirnmationFloating({ productById, closeOrder, createOrder, showAddedToast });
  
  return (
    <section className="order-confirmation-floating floating flex flex-col gap-2 w-162 fixed top-16 left-0 p-4 rounded-lg bg-white z-20 md:top-1/2 md:left-1/2 md:-translate-x-1/2
     md:-translate-y-1/2 lg:top-16 lg:left-0 lg:translate-x-0 lg:translate-y-0 max-cellphone-landscape:w-11/12 max-cellphone:w-11/12 max-cellphone:left-1/2 max-cellphone:-translate-x-1/2  
    ">
      <header className="inline-flex justify-between">
        <h1 className="text-2xl font-semibold">{productById.nombre}</h1>
        <button className="h-7 w-7 cursor-pointer" onClick={closeOrder}>
          <img src="/ep_close-bold.svg" className="h-full w-full"/>
        </button>
      </header>
      <article className="grid grid-cols-[229px_1fr] grid-rows-[36px_36px_auto_36px_1fr] gap-2 mt-4
      max-cellphone:grid-cols-1 max-cellphone:grid-rows-none max-cellphone:auto-rows-min max-cellphone:items-center">
        <figure className="col-start-1 col-end-2 row-start-2 w-40 h-40 flex items-center justify-center bg-peach-cream rounded-full self-center mt-6
        max-cellphone:row-auto max-cellphone:row-end-auto max-cellphone:mt-2 max-cellphone:w-30 max-cellphone:h-30
        max-cellphone:self-center max-cellphone:justify-self-center">
          <img className="w-25 h-25 max-cellphone:w-20 max-cellphone:h-20" src="/a-cup-of-coffee-free-png.png"/>
        </figure>
        <h1 className="row-start-1 row-end-2 col-start-2 col-end-3 text-h3-24 font-semibold
        max-cellphone:col-start-1 max-cellphone:col-end-2 max-cellphone:row-auto max-cellphone:row-end-auto">{productById.nombre}</h1>
        <h2 className="row-start-2 row-end-3 col-start-2 col-end-3 text-gray-700 font-semibold
        max-cellphone:col-start-1 max-cellphone:col-end-2 max-cellphone:row-auto max-cellphone:row-end-auto">{categorieLabel}</h2>
        <p className="row-start-3 row-end-4 col-start-2 col-end-3 text-p-16 font-semibold
        max-cellphone:col-start-1 max-cellphone:col-end-2 max-cellphone:row-auto max-cellphone:row-end-auto">{productById.descripcion}</p>
        <h2 className="row-start-4 row-end-5 col-start-2 col-end-3 text-h3-24 font-semibold inline-flex items-center
        max-cellphone:col-start-1 max-cellphone:col-end-2 max-cellphone:row-auto max-cellphone:row-end-auto
        max-cellphone:inline-flex max-cellphone:mx-auto">
          <span className="text-p-16">{cantidad}X</span>
          <span className="ml-4 text-h4-20 font-antonio">{formatPrice(total || 0)}</span>
        </h2>
        <form className="row-start-5 row-end-6 col-start-2 col-end-3 w-29 inline-flex h-9 justify-evenly
        max-cellphone-landscape:h-11 max-cellphone-landscape:w-full max-cellphone-landscape:justify-center max-cellphone-landscape:gap-4
        max-cellphone:col-start-1 max-cellphone:col-end-2 max-cellphone:row-auto max-cellphone:row-end-auto
        max-cellphone:h-12 max-cellphone:w-full max-cellphone:justify-center max-cellphone:gap-4 max-cellphone:mx-auto">
          <button
            type="button"
            className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center cursor-pointer max-cellphone-landscape:h-11 max-cellphone-landscape:w-11 max-cellphone:h-12 max-cellphone:w-12"
            onClick={handleDecrementTotal}
          >
            <img src="/humbleicons_minus.svg" className="w-6 h-6 max-cellphone-landscape:w-7 max-cellphone-landscape:h-7 max-cellphone:w-7 max-cellphone:h-7" alt="disminuir cantidad" />
          </button>
          <input
            type="text"
            value={cantidad}
            className="w-8 text-center border-gray-300 rounded-md appearance-none border-none bg-transparent max-cellphone-landscape:w-12 max-cellphone-landscape:text-lg max-cellphone:w-12 max-cellphone:text-lg"
            readOnly
          />
          <button
            type="button"
            className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center cursor-pointer max-cellphone-landscape:h-11 max-cellphone-landscape:w-11 max-cellphone:h-12 max-cellphone:w-12"
            onClick={handleIncrementTotal}
          >
            <img src="/lucide_plus.svg" className="w-6 h-6 max-cellphone-landscape:w-7 max-cellphone-landscape:h-7 max-cellphone:w-7 max-cellphone:h-7" alt="aumentar cantidad" />
          </button>
        </form>
        <button
          className="row-start-6 col-start-2 col-end-3 w-62 h-12 rounded-xl bg-medium-blue text-black text-center text-p-16 font-semibold
          max-cellphone:col-start-1 max-cellphone:col-end-2 max-cellphone:row-auto max-cellphone:row-end-auto max-cellphone:w-full"
          onClick={() => {
            createOrder(productOrder);
            showAddedToast({
              nombre: productOrder.nombre,
              cantidad: productOrder.cantidad,
              total: productOrder.total
            });
            closeOrder();
          }}
        >
          Agregar
        </button>
      </article>
    </section>
  );
};

const OrderConfirmationFloating: React.FC = () => {
  const productById = useProductStore((state) => state.productById);
  const { closeBg, productFloatingVisible, closeOrderFloating } = useDarkBg();
  const createOrder = useOrderStore((state) => state.createOrder);
  const showAddedToast = useUiStore((state) => state.showAddedToast);

  const closeOrder = () =>{
    closeBg();
    closeOrderFloating();
  }

  if(productFloatingVisible===false || !productById ) return null;

  return (
    <OrderConfirmationFloatingContent
      key={productById._id}
      productById={productById}
      closeOrder={closeOrder}
      createOrder={createOrder}
      showAddedToast={showAddedToast}
    />
  );
};

export default OrderConfirmationFloating;
