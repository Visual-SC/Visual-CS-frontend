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
import CategoriesTabletAside from './components/CategoriesTabletAside/CategoriesTabletAside';

type AppChilden = {
  children:  ReactNode | JSX.Element
}

const AppContainer: React.FC<AppChilden> = ({ children }) => {
  return(
    <>
      <Header/>
      <OrderAddedToast />
      <ShoppingCartAside/>
      <OrderConfirmationFloating />
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
