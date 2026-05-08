import React from "react";
import type { ProductCardProps } from "./types";
import { formatPrice } from "../../utils/formatPrice";
import { useProductStore } from "../../hooks/useProducts";
import { useDarkBg } from "../../utils/useDarkBg";

const ProductCard: React.FC<ProductCardProps> = ({ nombre, precio, _id }) => {
  const getOneProductById = useProductStore((state) => state.getOneProductById);
  const { toggleBg,openOrderFloating } = useDarkBg();

  const handleOrderFloating = () =>{
   getOneProductById(_id); 
   toggleBg();
   openOrderFloating();
  }

  return (
    <div className="flex flex-col cursor-pointer max-cellphone:w-full" onClick={handleOrderFloating}>
      <figure className="flex items-center justify-center relative rounded-full bg-peach-cream h-28 w-28 mx-auto">
        <section className="h-9 w-9 absolute right-0 top-0 bg-medium-blue rounded-full flex items-center justify-center">
          <img src="/lucide_plus.svg" className="w-6 h-6" alt ={nombre}/>
        </section>
        <img src="/a-cup-of-coffee-free-png.png" alt={nombre} className="w-18 h-18" />  
      </figure>
      <h2 className="text-p-16 font-semibold mt-1">{nombre}</h2>
      <h3 className="text-p-16 font-semibold mt-1">{formatPrice(precio)}</h3>
    </div>
  );
};

export default ProductCard;
