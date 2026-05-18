import React from "react";
import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";
import { useShoppingCartAside } from "./useShoppingCartAside";
import { useOrderStore } from "../../hooks/useOrder";
import { formatPrice } from "../../utils/formatPrice";
import { useDarkBg } from "../../utils/useDarkBg";

const ShoppingCartAside: React.FC = () => {
  const order = useOrderStore((state) => state.order);
  const increaseItemQuantity = useOrderStore((state) => state.increaseItemQuantity);
  const decreaseItemQuantity = useOrderStore((state) => state.decreaseItemQuantity);
  const removeItem = useOrderStore((state) => state.removeItem);
  const closecart = useDarkBg((state) => state.closeCart);
  const openBg = useDarkBg((state) => state.openBg);
  const openCustomerData = useDarkBg((state) => state.openCustomerData);

  
  const shoppingCartAside = useShoppingCartAside();
  
  if (!shoppingCartAside) return null;

  const { asideRef, closeShoppingCartAside } = shoppingCartAside;

  const hasItems = (order.items?.length ?? 0) > 0;
  
  return (
    <aside
      ref={asideRef}
      className="bg-white w-130 z-20 fixed h-full top-0 right-0 p-4 flex flex-col will-change-transform
      max-cellphone:w-full max-cellphone:z-30"
    >
      <header className="inline-flex relative items-center justify-center">
        <button
          type="button"
          className="w-9 h-9 absolute left-0 top-2 cursor-pointer"
          aria-label="Cerrar orden"
          onClick={() => closeShoppingCartAside("animated")}
        >
          <img
            src="/ep_close-bold.svg"
            className="w-full h-full"
            alt=""
          />
        </button>
        <h2 className="font-antonio text-h1-32 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">TU ORDEN</h2>
      </header>
      {!hasItems ? (
        <section className="flex flex-col max-w-101 mx-auto">
          <img className="w-101 mx-auto" alt="Tu orden está vacía" src="/sin-pedido.png" />
          <p className="text-center mt-8 text-h4-20 font-semibold">
            ¿Qué tal un espresso, o una torta Red Velvet para empezar?
          </p>
          <button
            className="w-62 h-12 rounded-xl bg-medium-blue text-black text-center text-p-16 font-semibold mx-auto mt-4"
            onClick={() => closeShoppingCartAside("animated")}
          >
            Ver menú
          </button>
        </section>
      ) : (
        <>
          {/* Lista scrollable (especialmente en max-cellphone) */}
          <ul className="flex flex-col mt-2 gap-4 mx-auto max-cellphone:w-full flex-1 min-h-0 overflow-y-auto pr-1 scrollbar-hidden-tablet-up">
            {order.items.map((item) => (
              <ShoppingCartProduct
                key={item._id}
                _id={item._id}
                nombre={item.nombre}
                imagen={"/a-cup-of-coffee-free-png.png"}
                cantidad={item.cantidad}
                total={item.total}
                precio={item.precio}
                categoria={item.categoria}
                disponible={item.disponible}
                descripcion={item.descripcion}
                increaseQuantity={() => increaseItemQuantity(item._id)}
                decreaseQuantity={() => decreaseItemQuantity(item._id)}
                discardProduct={() => removeItem(item._id)}
              />
            ))}
          </ul>

          {/* Footer fijo/visible */}
          <footer className="shrink-0 pt-4 pb-2 bg-white">
            <h2 className="font-antonio text-h1-32 text-center">
              <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">TOTAL:</span>
              <span className="text-black ml-2">{formatPrice(order.resumen.total)}</span>
            </h2>
            <button
              className="w-62 h-12 rounded-xl bg-medium-blue text-black text-center text-p-16 font-semibold mx-auto mt-4 block"
              onClick={() => {
                closecart();
                openBg();
                openCustomerData();
              }}
            >
              Crear Orden
            </button>
          </footer>
        </>
      )}
    </aside>
  );
};

export default ShoppingCartAside;