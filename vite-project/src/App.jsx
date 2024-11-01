import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    
    <div>
      
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path='/empresa' element={<Empresa />}/>
          <Route path='/contato' element={<Contato />}/>
        </Routes>
        </BrowserRouter>
      
    </div>
    
);

}

export default App
