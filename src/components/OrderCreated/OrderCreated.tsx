import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useDarkBg } from "../../utils/useDarkBg";
import { useOrderStore } from "../../hooks/useOrder";

const OrderCreated: React.FC = () => {
  const { orderCreatedVisible, closeOrderCreated,closeBg } = useDarkBg();
  const clearOrder = useOrderStore((state) => state.clearOrder);
  const order = useOrderStore((state) => state.order);

  const closeAlll = () =>{
    closeOrderCreated();
    closeBg();
    clearOrder();
  }

  if(orderCreatedVisible === false) return null;

  return (
    <section className="order-created z-20 fixed flex flex-col gap-2 w-194 h-auto p-8 top-16 bg-white rounded-xl">
      <button className="absolute right-3 top-3 h-7 w-7 cursor-pointer" onClick={closeAlll}>

        <img src="/ep_close-bold.svg" className="h-full w-full"/>
      </button>
      <article className="flex flex-col w-87 mx-auto">
        <img src="/pedido-confirmado-redson-coffe.png" alt="Orden creada" className="w-full" />
        <h1 className="text-center mt-2 text-h4-20 font-semibold">Orden No: {order.numero_orden.slice(0, 8)}</h1>
        <div className="grid">
          <ul className="flex flex-col  justify-between w-full mt-2">
              {
                order.items.map((item) => {
                  return(
                    <li className="grid grid-cols-[224px_1fr] justify-between h-9 w-full mt-2 items-center">
                    <div className=" h-full w-full inline-flex items-center" key={item._id}>
                      <figure className="h-9 -w9">
                        <img className="h-full" src="/a-cup-of-coffee-free-png.png"/>
                      </figure>   
                      <h2 className="ml-2 font-p-16 font-semibold text-left">{item.nombre}</h2>
                    </div>
                    <p>x{item.cantidad} <span>{formatPrice(item.total)}</span></p>
                    </li>
                  )
                })
              }
          </ul>
        </div>
        <div className="w-50 inline-flex mx-auto justify-between mt-4 font-antonio text-h1-32">
          <h1 className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue w-18">TOTAL:</h1>
          <h1 className="text-black ml-5">{formatPrice(order.resumen.total)}</h1>
        </div>
      </article>
    </section>
  );
};

export default OrderCreated;
