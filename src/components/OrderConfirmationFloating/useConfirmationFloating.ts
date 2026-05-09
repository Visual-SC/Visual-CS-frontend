import React, { useMemo } from "react";
import type { ProductOrderProps } from "../../types/order-env";
import { CategoriesOrderList, categoryIndex } from "./data";
import type { FloatingContentProps } from "./types";

export const useConfirnmationFloating = ({productById}: FloatingContentProps  ) => {

    const [cantidad, setCantidad] = React.useState<number>(1)

    const categorieLabel = useMemo(() => {
    const categoryKey = productById.categoria as keyof typeof categoryIndex;
    const category = categoryIndex[categoryKey];
    if (category === undefined) return "";
    return CategoriesOrderList[category].category;
  }, [productById.categoria]);

  const total = productById.precio * cantidad;

  const productOrder: ProductOrderProps = {
    ...(productById as ProductOrderProps),
    cantidad,
    total,
    categoria: categorieLabel || productById.categoria
  };

  const handleIncrementTotal = () => {
    setCantidad((prev) => prev + 1);
  };

  const handleDecrementTotal = () => {
    setCantidad((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return {
    cantidad,
    categorieLabel,
    total,
    productOrder,
    handleIncrementTotal,
    handleDecrementTotal  
  }
}