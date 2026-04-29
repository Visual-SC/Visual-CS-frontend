import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Home />}>
        <Route index element={<h1>Home</h1>} />
        <Route path=":category" element={<h1>Basde de espresso</h1>} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
