import type { ProductShoppingCart } from "./types";
import React from "react";

export const useShoppingCarProduct = () =>{
  const [quantity, setQuantity] = React.useState<number>(1);

  const productCard: ProductShoppingCart = {
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
        productCard.increaseQuantity();
      };
    
      const decreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        productCard.decreaseQuantity();
      };
    
      return { productCard, increaseQuantity, decreaseQuantity };
}