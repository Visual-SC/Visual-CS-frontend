import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "./data";
import CartItem from "../../components/CartItem/CartItem";
import BurguerButton from "../../components/BurguerButton/BurguerButton";

const Header: React.FC = () => {
  return (
    <header className="bg-white h-20 max-desktop:h-11 max-tablet-large:w-full flex items-center
    max-cellphone:hidden">
      <BurguerButton />
      <ul className="flex list-none font-semibold text-p-16 items-center justify-between text-black w-8/12 max-tablet-large:w-11/12">
        {HeaderData.map((item, index) => {
          if ("image" in item && item.image && item.description !== "Carrito") {
            return (
              <li key={index}>
                <Link to={item.link} className={item.className} aria-label={`Ir a ${item.description}`}>
                  <img src={item.image} alt={item.alt} className="max-tablet-large:h-10 h-10 w-auto bg-cover desktop:h-20" />
                </Link>
              </li>
            );
          } else if (item.description === "Carrito" && "image" in item) {
            return <CartItem key={index} {...item} />;
          }
          else {
            return (
              <li key={index}>
                <Link to={item.link} className={item.className} aria-label={`Ir a ${item.description}`}>
                  {item.description}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </header>
  );
};

export default Header;