import './App.css'
import Evento from'./components/evento'
import Form from './components/form'
import Botao from './components/button'

function App() {
  
  const sum = (a, b) => a + b
  

return (
  <div className='App'>
    <p>soma: {sum(1,3)}</p>
    <Evento numero="1" />
    <Evento numero="2" />
    <Form />
    <Botao  />
  </div>

)

}

export default App
