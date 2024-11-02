import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './components/layout/NavBar';
import Rodape from './components/layout/Rodape';

function App() {
  return (
    
    <div>
      
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path='/empresa' element={<Empresa />}/>
          <Route path='/contato' element={<Contato />}/>
        </Routes>
        </BrowserRouter>
        <Rodape />
        
    </div>
    
);

}

export default App
