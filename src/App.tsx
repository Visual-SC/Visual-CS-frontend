import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route element={<Home />}>
        <Route index element={<h1>Home</h1>} />
        <Route path=":category" element={<h1>Base de espresso</h1>} />
        <Route path=":category/:id" element={<h1>Producto 1</h1>} />
      </Route>
     </Routes>
    <Footer/> 
    </BrowserRouter>
  )
}

export default App
