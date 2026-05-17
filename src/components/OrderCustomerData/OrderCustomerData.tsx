import React, { useState, useEffect } from "react";
import type { OrderCustomerDataProps, OrderCustomerDataComponentProps } from "./types";
import { mesaOptions, OrderCustomerDataInitial } from "./data";
import { useDarkBg } from "../../utils/useDarkBg";
import type { NumeroDeMesa } from "../../types/order-env";

const STORAGE_KEY = "customer-data-draft";

const loadInitialData = (): OrderCustomerDataProps => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {}
  return OrderCustomerDataInitial;
};

const OrderCustomerData: React.FC<OrderCustomerDataComponentProps> = ({ onSubmit }) => {
  const { customerDataVisible, closeCustomerData, closeBg } = useDarkBg();
  const [formData, setFormData] = useState<OrderCustomerDataProps>(loadInitialData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleClose = () => {
    closeCustomerData();
    closeBg();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    handleClose();
  };

  if (customerDataVisible === false) return null;

  return (
    <section className="order-created z-20 fixed flex flex-col gap-4 w-194 h-auto p-8 top-16 bg-white rounded-xl">
      <button className="absolute right-3 top-3 h-7 w-7 cursor-pointer" onClick={handleClose}>
        <img src="/ep_close-bold.svg" className="h-full w-full" />
      </button>
      <h1 className="text-h3-24 font-semibold text-center">Datos del cliente</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="cliente" className="text-p-16 font-semibold text-black">
            Nombre
          </label>
          <input
            type="text"
            id="cliente"
            value={formData.cliente}
            onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
            placeholder="Nombre del cliente"
            className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-p-16 font-montserrat focus:outline-none focus:border-glacier-blue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="numero_mesa" className="text-p-16 font-semibold text-black">
            Número de mesa
          </label>
          <div className="relative">
            <select
              id="numero_mesa"
              value={formData.numero_mesa}
              onChange={(e) => setFormData({ ...formData, numero_mesa: e.target.value as NumeroDeMesa })}
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-p-16 font-montserrat appearance-none cursor-pointer focus:outline-none focus:border-glacier-blue"
            >
              {mesaOptions.map((mesa) => (
                <option key={mesa} value={mesa}>
                  {mesa}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-62 h-12 rounded-xl bg-medium-blue text-black text-center text-p-16 font-semibold cursor-pointer mx-auto mt-4 max-cellphone:w-full"
        >
          Completar Orden
        </button>
      </form>
    </section>
  );
};

export default OrderCustomerData;