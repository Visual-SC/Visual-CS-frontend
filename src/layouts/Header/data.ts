import type { HeaderLink,HeaderImageLink } from "./types";

export const HeaderData: (HeaderLink | HeaderImageLink)[] = [
  {
    link: "/",
    image: "/Logo-principal-Rodson-Coffee.png",
    alt: "Rodson Coffee logo",
    className: "flex items-center h-full no-underline",
    description: "Logo principal"
  },
  {
    link: "/",
    description: "HOME",
    className: "focus-visible:underline outline-none transition-colors"
  },
  {
    link: "/",
    description: "ACERCA DE",
    className: "focus-visible:underline outline-none transition-colors"
  },
  {
    link: "/",
    image: "/ci_shopping-cart.svg",
    alt: "Carrito de compras",
    description: "Carrito",
    className: "flex items-center w-7 h-7"
  },
];