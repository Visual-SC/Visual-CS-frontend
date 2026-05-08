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
  const sendOder = useOrderStore((state) => state.sendOrder);
  const closecart = useDarkBg((state) => state.closeCart);
  const openBg = useDarkBg((state) => state.openBg);
  const openOrderCreated = useDarkBg((state) => state.openOrderCreated);

  // hook para el control de la apertura y cierre del aside del carrito de compras
  const shoppingCartAside = useShoppingCartAside();
  
  if (!shoppingCartAside) return null;

  const { asideRef, closeShoppingCartAside } = shoppingCartAside;
  

  return (
    <aside
      ref={asideRef}
      className="bg-white w-130 z-20 fixed h-full top-0 right-0 p-4 flex flex-col will-change-transform"
    >
      <header className="inline-flex relative items-center justify-center">
        <button
          type="button"
          className="w-6 h-6 absolute left-0 top-2 cursor-pointer"
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
     {
        ((order.items?.length ?? 0) === 0)?(
          <section className="flex flex-col max-w-101 mx-auto">
            <img className="w-101 mx-auto" alt="Tu ordern está vacía" src="/sin-pedido.png"  />
            <p className="text-center mt-8 text-h4-20 font-semibold">¿Que tal un espresso, o una torta Red Velvet para empezar</p>
            <button className="w-62 h-12 rounded-xl bg-medium-blue
             text-black text-center text-p-16 font-semibold mx-auto mt-4"
              onClick={() => closeShoppingCartAside("animated")}
             >Ver menú</button>
          </section>
        ): 
      <ul className="flex flex-col mt-2 gap-4 mx-auto">
       {
        order.items.map((item) => (
          <ShoppingCartProduct 
            key={item._id} 
            _id={item._id}
            nombre ={item.nombre}
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
        ))   
       }   
        <h2 className="mt-4 font-antonio text-h1-32 text-center ">
          <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">TOTAL:</span>
          <span className="text-black ml-2">{formatPrice(order.resumen.total)}</span>
        </h2>
        <button className="w-62 h-12 rounded-xl bg-medium-blue text-black 
        text-center text-p-16 font-semibold mx-auto mt-4"
        onClick={async () => {
          try {
            await sendOder();
            closecart();
            openBg();
            openOrderCreated();
            console.log("Orden enviada exitosamente");
          } catch (error) {
            console.error("Error al confirmar la orden:", error);
          }
        }}
        >Confirmar orden</button>
      </ul>
     }        
    </aside>
  );
};

export default ShoppingCartAside;