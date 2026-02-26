import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header'
import AsideHeader from './components/AsideHeader/AsideHeader';
import BurguerButton from './elements/BurguerButton/BurguerButton';
import { useAppUX } from './context/UXContext/useAppUX';
import BgScreen from './elements/BgScreen.tsx/BgScreen';
import Menu from './pages/Menu/Menu';

function App() {
  const asideHeader = useAppUX((state) => state.asideHeader);
  const toggleAsideHeader = useAppUX((state) => state.toggleAsideHeader);

  return (
    <> 
      <BrowserRouter>
       <BurguerButton toggleMenu={toggleAsideHeader} asideHeader={asideHeader}/>
       <BgScreen asideHeader={asideHeader}/>
       <Header/>
       <AsideHeader asideHeader={asideHeader} toggleAsideHeader={toggleAsideHeader}/>
        <Routes>
          <Route path="/" element={<Menu />} />          
          <Route path="/acerca-de" element={<h1>Acerca de</h1>} />
        </Routes>
      </BrowserRouter>
    </>
);}

export default App
