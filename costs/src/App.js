import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/novoProjeto';

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <BrowserRouter>

    <Container customClass='min-height'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/Empresa' element = {<Empresa />} />
        <Route path='/Contato' element = {<Contato />} />
        <Route path='/novoProjeto' element = {<NovoProjeto />} />
      </Routes>
      
    </Container>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
