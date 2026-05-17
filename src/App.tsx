import { type ReactNode, type JSX } from 'react';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DarkBg from './layouts/DarkBg/DarkBg';
import ShoppingCartAside from './components/ShoppingCartAside/ShoppingCartAside';
import OrderConfirmationFloating from './components/OrderConfirmationFloating/OrderConfirmationFloating';
import OrderAddedToast from './components/OrderAddedToast/OrderAddedToast';
import OrderCreated from './components/OrderCreated/OrderCreated';
import OrderCustomerData from './components/OrderCustomerData/OrderCustomerData';
import CategoriesTabletAside from './components/CategoriesTabletAside/CategoriesTabletAside';
import HeaderCellphone from './layouts/HeaderCellphone/HeaderCellphone';
import { useOrderStore } from './hooks/useOrder';
import { useDarkBg } from './utils/useDarkBg';
import type { OrderCustomerDataProps } from './components/OrderCustomerData/types';

type AppChilden = {
  children:  ReactNode | JSX.Element
}

const AppContainer: React.FC<AppChilden> = ({ children }) => {
  const handleCustomerDataSubmit = async (data: OrderCustomerDataProps) => {
    const { setCustomerData, sendOrder } = useOrderStore.getState();
    const { closeCustomerData, openBg, openOrderCreated } = useDarkBg.getState();

    setCustomerData(data.cliente, data.numero_mesa);

    try {
      await sendOrder();
      localStorage.removeItem("customer-data-draft");
      closeCustomerData();
      openBg();
      openOrderCreated();
    } catch (error) {
      console.error("Error al confirmar la orden:", error);
    }
  };

  return(
    <>
      <Header/>
      <HeaderCellphone/>
      <OrderAddedToast />
      <ShoppingCartAside/>
      <OrderConfirmationFloating />
      <OrderCustomerData onSubmit={handleCustomerDataSubmit} />
      <OrderCreated/>
      <DarkBg />
      <CategoriesTabletAside />
      {children}
      <Footer/> 
    </>
  ) 
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/"  element={<AppContainer children={<Home />} />}/>
        <Route path="/category/:category" element={<AppContainer children={<Home />} />}/>
        <Route path="/category/:category/:pagina" element={<AppContainer children={<Home />} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
