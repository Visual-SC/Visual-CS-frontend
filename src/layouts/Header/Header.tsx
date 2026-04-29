import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "./data";


const Header: React.FC = () => {
  return (
    <header className= "text-white p-4">
      <ul className="flex list-none font-semibold items-center justify-between text-black w-8/12">
        <Link to="/" className="flex items-center gap-2 no-underline" aria-label="Ir al inicio">
          <img src="/Logo-principal-Rodson-Coffee.png" alt="Rodson Coffee logo" className="h-10 w-auto" />
        </Link>
        <li className="no-underline">
          <Link to="/" className="focus-visible:underline outline-none transition-colors">HOME</Link>
        </li>
        <li>
            <Link to="/" className="focus-visible:underline outline-none transition-colors">ACERCA DE</Link>
        </li>
        <Link to="/" className="flex items-center" aria-label="Ver carrito">
          <img src="/ci_shopping-cart.svg" alt="Carrito de compras" className="h-8 w-8" />
        </Link>
      </ul>
    </header>
  );
};

export default Header;