import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header'

function App() {
  return (
    <> 
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<h1>Menu</h1>} />          
          <Route path="/acerca-de" element={<h1>Acerca de</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
