import React, { useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useProductStore } from "../../hooks/useProducts";
import { useDarkBg } from "../../utils/useDarkBg";
import type { ProductOrderProps} from "./types";
import { CategoriesOrderList, categoryIndex } from "./data";

const OrderConfirmationFloating: React.FC = () => {
  const [ProductOrder, setProductOrder] = React.useState<ProductOrderProps>({
    nombre: "",
    categoria: "",
    precio: 0,
    descripcion: "",
    disponible: true,
    imagen: "",
    _id: "",
    cantidad: 0,
    total: 0
  });
  const [categorieLabel, setCategorieLabel] = React.useState<string>(""); 
  const productById = useProductStore((state) => state.productById);
  const { closeBg, productFloatingVisible, closeOrderFloating } = useDarkBg();

 useEffect(() => {
      if(productFloatingVisible===true && productById !== null){
         setProductOrder({
          ...productById,
          cantidad: 1,
          total: productById.precio 
        });
      }
  },[productFloatingVisible, productById]);

  useEffect(() => {
    const category = categoryIndex[ProductOrder.categoria as keyof typeof categoryIndex];

    if (category !== undefined) {
      setCategorieLabel(CategoriesOrderList[category].category);
    }
  },[ProductOrder.categoria]);

  const closeOrder = () =>{
    closeBg();
    closeOrderFloating();
  }

  const handleIncrementTotal = () => {
    setProductOrder((prev) => {
      const newCantidad = prev.cantidad + 1;
      const newTotal = prev.precio * newCantidad;
      return {
        ...prev,
        cantidad: newCantidad,
        total: newTotal
      };
    });
  };

  const handleDecrementTotal = () => {
    setProductOrder((prev) => {
      const newCantidad = prev.cantidad > 1 ? prev.cantidad - 1 : 1;
      const newTotal = prev.precio * newCantidad;
      return {
        ...prev,
        cantidad: newCantidad,
        total: newTotal
      };
    });
  }

  if(productFloatingVisible===false || !productById ) return null;

  return (
    <section className="order-confirmation-floating floating flex flex-col gap-2 w-162 fixed top-16 left-0 p-4 rounded-lg bg-white z-20">
      <header className="inline-flex justify-between">
        <h1 className="text-2xl font-semibold">{ProductOrder.nombre}</h1>
        <button className="h-7 w-7 cursor-pointer" onClick={closeOrder}>
          <img src="/ep_close-bold.svg" className="h-full w-full"/>
        </button>
      </header> 
      <article
        className="grid grid-cols-[229px_1fr] grid-rows-[36px_36px_auto_36px_1fr] gap-2 mt-4"
      >
        <figure className="col-start-1 col-end-2 row-start-2 w-40 h-40 flex items-center 
        justify-center bg-peach-cream rounded-full self-center mt-6 mx-auto">
            <img className="w-25 h-25" src="/a-cup-of-coffee-free-png.png"/>
        </figure>
        <h1 className="row-start-1 row-end-2 col-start-2 col-end-3 text-h3-24 font-semibold">{ProductOrder.nombre}</h1>
        <h2 className="row-start-2 row-end-3 col-start-2 col-end-3 text-gray-700 font-semibold">{categorieLabel}</h2>
        <p className="row-start-3 row-end-4 col-start-2 col-end-3 text-p-16 font-semibold">{ProductOrder.descripcion}</p>
        <h2 className="row-start-4 row-end-5 col-start-2 col-end-3 text-h3-24 font-semibold inline-flex items-center">
         <span className="text-p-16">{ProductOrder.cantidad}X</span>
                 <span className="ml-4 text-h4-20 font-antonio">
                   {formatPrice(ProductOrder.total || 0)}
                 </span>
        </h2>
        <form className="row-start-5 row-end-6 col-start-2 col-end-3 w-29 inline-flex h-9 justify-evenly">
        <button
          type="button"
          className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center"
          onClick={handleDecrementTotal}
        >
          <img
            src="/humbleicons_minus.svg"
            className="w-6 h-6"
            alt="disminuir cantidad"
          />
        </button>
        <input
          type="text"
          value={ProductOrder.cantidad}
          className="w-8 text-center border-gray-300 rounded-md appearance-none border-none bg-transparent "
          readOnly
        />
        <button
          type="button"
          className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center cursor-pointer"
          onClick={handleIncrementTotal}
        >
          <img src="/lucide_plus.svg" className="w-6 h-6" alt="aumentar cantidad" />
        </button>
      </form>
      <button className="row-start-6 row-end- col-start-2 col-end-3 w-62 h-12 rounded-xl bg-medium-blue text-black text-center text-p-16 font-semibold">Agregar</button>
      </article>
    </section>
  );
};

export default OrderConfirmationFloating;
