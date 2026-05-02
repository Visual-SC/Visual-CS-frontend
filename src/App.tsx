import type { ReactNode, JSX } from 'react';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DarkBg from './layouts/DarkBg/DarkBg';
import ShoppingCartAside from './components/ShoppingCartAside/ShoppingCartAside';
//import OrderConfirmationFloating from './components/OrderConfirmationFloating/OrderConfirmationFloating';

type AppChilden = {
  children:  ReactNode | JSX.Element
}

const AppContainer: React.FC<AppChilden> = ({ children }) => {
  return(
    <>
      <Header/>
      <ShoppingCartAside/>
      {/* <OrderConfirmationFloating /> */}
      <DarkBg />
      {children}
      <Footer/> 
    </>
  ) 
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppContainer children={<Home />} />}>
          <Route index element={null} />
          <Route path=":category/base-de-espresso" element={null} />
          <Route path=":category/:id" element={null} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
