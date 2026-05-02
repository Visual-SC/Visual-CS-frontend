import React from "react";
import { LoadingProductsData } from "./data";
import type { LoadingProductsProps } from "./types";

const LoadingProducts: React.FC<LoadingProductsProps> = ({ message }) => {
  const loadingMessage = message ?? LoadingProductsData.defaultMessage;

  return (
    <div className="col-span-3 flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl bg-amber-50 p-6 text-center">
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-glacier-blue border-t-medium-blue" aria-hidden="true" />
      <p className="text-base font-semibold text-dark-green" role="status" aria-live="polite">
        {loadingMessage}
      </p>
    </div>
  );
};

export default LoadingProducts;
