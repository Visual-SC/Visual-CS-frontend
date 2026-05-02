import React from "react";
import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";
import { useDarkBg } from "../../utils/useDarkBg";

const ShoppingCartAside: React.FC = () => {
const { closeBg } = useDarkBg();

const closeSHoppingCartAside = () =>{
  closeBg();
}

  return (
    <aside className="bg-white w-130 z-20 fixed h-full  top-0 right-0 p-4 flex flex-col">
      <header className="inline-flex relative items-center justify-center">
        <button className="w-6 h-6 absolute left-0 top-2" onClick={closeSHoppingCartAside}>
           <img 
             src="/ep_close-bold.svg"
             className="w-full h-full"
             alt="cerrar orden"
           />
        </button>
        <h2 className="font-antonio text-h1-32 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">TU ORDEN</h2>
      </header>
      <ul className="flex flex-col mt-8">
        <ShoppingCartProduct />
      </ul>  
    </aside>
  );
};

export default ShoppingCartAside;