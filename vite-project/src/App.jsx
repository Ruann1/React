import './App.css'
import FalaNome from './components/FalaNome'
import DadosCliente from './components/DadosCliente'
import Lista from './components/Lista'

function App() {
  
  function soma(a, b){
    return a + b
  } 
  

return (
  <div className='App'>
    <h1>{soma(1, 2)}</h1>

    <FalaNome nome = 'Ruan'/>

    <DadosCliente 
    foto = 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png'
    nome = 'Ruan'
    idade = '25'
    profissao = 'Desempregado'
    sexo = 'masculino'/> 

    <Lista />
  </div>

)

}

export default App
