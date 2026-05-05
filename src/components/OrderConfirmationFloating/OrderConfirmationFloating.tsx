import React, { useMemo } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useProductStore } from "../../hooks/useProducts";
import { useDarkBg } from "../../utils/useDarkBg";
import type { ProductOrderProps } from "../../types/order-env";
import { CategoriesOrderList, categoryIndex } from "./data";
import { useOrderStore } from "../../hooks/useOrder";
import { useUiStore } from "../../stores/uiStore";

const OrderConfirmationFloating: React.FC = () => {
  const productById = useProductStore((state) => state.productById);
  const { closeBg, productFloatingVisible, closeOrderFloating } = useDarkBg();
  const createOrder = useOrderStore((state) => state.createOrder);
  const showAddedToast = useUiStore((state) => state.showAddedToast);

  const closeOrder = () =>{
    closeBg();
    closeOrderFloating();
  }


  if(productFloatingVisible===false || !productById ) return null;

  return (
    <OrderConfirmationFloatingContent
      key={productById._id}
      productById={productById}
      closeOrder={closeOrder}
      createOrder={createOrder}
      showAddedToast={showAddedToast}
    />
  );
};

type FloatingContentProps = {
  productById: Omit<ProductOrderProps, "cantidad" | "total">;
  closeOrder: () => void;
  createOrder: (products: ProductOrderProps) => void;
  showAddedToast: (payload: { nombre: string; cantidad: number; total: number }) => void;
};

const OrderConfirmationFloatingContent: React.FC<FloatingContentProps> = ({
  productById,
  closeOrder,
  createOrder,
  showAddedToast
}) => {
  const [cantidad, setCantidad] = React.useState<number>(1);

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

  return (
    <section className="order-confirmation-floating floating flex flex-col gap-2 w-162 fixed top-16 left-0 p-4 rounded-lg bg-white z-20">
      <header className="inline-flex justify-between">
        <h1 className="text-2xl font-semibold">{productById.nombre}</h1>
        <button className="h-7 w-7 cursor-pointer" onClick={closeOrder}>
          <img src="/ep_close-bold.svg" className="h-full w-full"/>
        </button>
      </header>
      <article className="grid grid-cols-[229px_1fr] grid-rows-[36px_36px_auto_36px_1fr] gap-2 mt-4">
        <figure className="col-start-1 col-end-2 row-start-2 w-40 h-40 flex items-center justify-center bg-peach-cream rounded-full self-center mt-6 mx-auto">
          <img className="w-25 h-25" src="/a-cup-of-coffee-free-png.png"/>
        </figure>
        <h1 className="row-start-1 row-end-2 col-start-2 col-end-3 text-h3-24 font-semibold">{productById.nombre}</h1>
        <h2 className="row-start-2 row-end-3 col-start-2 col-end-3 text-gray-700 font-semibold">{categorieLabel}</h2>
        <p className="row-start-3 row-end-4 col-start-2 col-end-3 text-p-16 font-semibold">{productById.descripcion}</p>
        <h2 className="row-start-4 row-end-5 col-start-2 col-end-3 text-h3-24 font-semibold inline-flex items-center">
          <span className="text-p-16">{cantidad}X</span>
          <span className="ml-4 text-h4-20 font-antonio">{formatPrice(total || 0)}</span>
        </h2>
        <form className="row-start-5 row-end-6 col-start-2 col-end-3 w-29 inline-flex h-9 justify-evenly">
          <button
            type="button"
            className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center"
            onClick={handleDecrementTotal}
          >
            <img src="/humbleicons_minus.svg" className="w-6 h-6" alt="disminuir cantidad" />
          </button>
          <input
            type="text"
            value={cantidad}
            className="w-8 text-center border-gray-300 rounded-md appearance-none border-none bg-transparent "
            readOnly
          />
          <button
            type="button"
            className="h-9 w-9 rounded-full bg-medium-blue inline-flex items-center justify-center cursor-pointer"
            onClick={handleIncrementTotal}
          >
            <img src="/lucide_plus.svg" className="w-6 h-6" alt="aumentar cantidad" />
          </button>
        </form>
        <button
          className="row-start-6 col-start-2 col-end-3 w-62 h-12 rounded-xl bg-medium-blue text-black text-center text-p-16 font-semibold"
          onClick={() => {
            createOrder(productOrder);
            showAddedToast({
              nombre: productOrder.nombre,
              cantidad: productOrder.cantidad,
              total: productOrder.total
            });
            closeOrder();
          }}
        >
          Agregar
        </button>
      </article>
    </section>
  );
};

export default OrderConfirmationFloating;
