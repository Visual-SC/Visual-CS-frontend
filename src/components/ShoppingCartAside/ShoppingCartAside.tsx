import React from "react";
//import type { ShoppingCartAsideProps } from "./types";
//import { ShoppingCartData } from "./data";

const ShoppingCartAside: React.FC = () => {
  return (
    <aside className="bg-white w-130 z-20 sticky top-0 right-0 p-4 flex flex-col">
      <h2 className="font-antonio text-h1-32 text-center">TU ORDEN</h2>
      <ul className="flex flex-col mt-8">
        <li className="grid grid-cols-[144px_1fr] grid-rows-[32px_32px_1fr]">
            <figure className="col-start-1 col-end-2 relative flex items-center justify-center rounded-full bg-peach-cream">
                <section>
                    <img src="/ep_close-bold.svg" className="w-6 h-6" alt="quitar producto" />
                </section>
                <img src="/a-cup-of-coffee-free-png.png"  className="w-18 h-18"/>  
            </figure>
        </li>
      </ul>  
    </aside>
  );
};

export default ShoppingCartAside;