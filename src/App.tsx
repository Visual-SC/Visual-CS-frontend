import type { ReactNode, JSX } from 'react';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

type AppChilden = {
  children:  ReactNode | JSX.Element
}

const AppContainer: React.FC<AppChilden> = ({ children }) => {
  return(
    <>
      {children}
    </>
  ) 
}

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<AppContainer children={<Home />} />}>
          <Route index element={null} />
          <Route path=":category/base-de-espresso" element={null} />
          <Route path=":category/:id" element={null} />
        </Route>
      </Routes>
    <Footer/> 
    </BrowserRouter>
  )
}

export default App
