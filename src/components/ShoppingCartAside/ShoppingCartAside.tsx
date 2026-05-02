import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import type { ProductShoppingCart } from "./types";

const ShoppingCartAside: React.FC = () => {
  const [quantity, setQuantity] = React.useState<number>(1);

  const product: ProductShoppingCart = {
    nombre: "Campesino",
    categoria: "Café",
    precio: 9000,
    descripcion: "Café campesino tradicional.",
    disponible: true,
    imagen: "/a-cup-of-coffee-free-png.png",
    cantidad: quantity,
    total: quantity * 9000,
    increaseQuantity: () => setQuantity((prev: number) => prev + 1),
    decreaseQuantity: () => setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1)),
  };

  const increaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    product.increaseQuantity();
  };

  const decreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    product.decreaseQuantity();
  };

  return (
    <aside className="bg-white w-130 z-20 fixed h-full  top-0 right-0 p-4 flex flex-col">
      <h2 className="font-antonio text-h1-32 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">TU ORDEN</h2>
      <ul className="flex flex-col mt-8">
        <li className="grid grid-cols-[144px_1fr] grid-rows-[32px_32px_1fr] h-36 gap-4">
            <figure className="col-start-1 col-end-2 row-start-1 row-end-4 relative flex items-center justify-center 
            rounded-full bg-peach-cream">
                <section className="h-9 w-9 absolute cursor-pointer right-0 top-0 bg-medium-blue rounded-full flex items-center justify-center">
                    <img src="/ep_close-bold.svg" className="w-6 h-6" alt="quitar producto" />
                </section>
                <img src={product.imagen} className="w-18 h-18" alt={product.nombre} />  
            </figure>
            <div className="inline-flex item-center">
              <h3 className="text-h4-20 font-semibold">{product.nombre}</h3>
            </div>
            <div className="inline-flex items-center font-semibold">
              <span className="font-p-18">{product.cantidad}X</span>
              <span className="ml-4 text-h4-20 font-antonio">{formatPrice(product.total)}</span>
            </div>
            <form className="w-29 inline-flex h-9 justify-evenly">
              <button className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center"
              onClick={decreaseQuantity}>
                <img src="/humbleicons_minus.svg" className="w-6 h-6" alt="disminuir cantidad" />
              </button>
              <input type="text" value={product.cantidad} className="w-8 text-center border-gray-300 rounded-md appearance-none border-none bg-transparent " readOnly />
              <button className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center"
              onClick={increaseQuantity}>
                <img src="/lucide_plus.svg" className="w-6 h-6" alt="aumentar cantidad" />
              </button>
            </form>
        </li>
      </ul>  
    </aside>
  );
};

export default ShoppingCartAside;