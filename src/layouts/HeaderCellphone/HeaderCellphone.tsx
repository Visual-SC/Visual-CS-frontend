import React from "react";
import type { HeaderCellphoneProps } from "./types";
//import { HeaderCellphoneData } from "./data";
import BurguerButton from "../../components/BurguerButton/BurguerButton";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";


const HeaderCellphone: React.FC<HeaderCellphoneProps> = () => {  
  return (
    <header className="flex h-9 justify-between w-11/12 mx-auto mt-2 cellphone:hidden">
      <BurguerButton />
      <Link to="/" className="h-full">
        <img className="h-9" src="/Logo-principal-Rodson-Coffee.png" alt="Logo de Rodson Coffee"/>
      </Link>
     <CartItem 
        description="Carrito de compras" 
        link="/"
        image="/ci_shopping-cart.svg"
        alt="Carrito de compras"
      /> 
    </header>
  );
};

export default HeaderCellphone;