import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "./data";
import CartItem from "../../components/CartItem/CartItem";

const Header: React.FC = () => {
  return (
    <header className="text-white h-20">
      <ul className="flex list-none font-semibold text-p-16 items-center justify-between text-black w-8/12">
        {HeaderData.map((item, index) => {
          if ("image" in item && item.image && item.description !== "Carrito") {
            return (
              <li key={index}>
                <Link to={item.link} className={item.className} aria-label={`Ir a ${item.description}`}>
                  <img src={item.image} alt={item.alt} className="h-20 w-auto" />
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