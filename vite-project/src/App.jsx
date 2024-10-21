import './App.css'
import Evento from'./components/evento'
import Form from './components/form'

function App() {
  
  function soma(a, b){
    return a + b
  } 
  

return (
  <div className='App'>
    <Evento numero="1" />
    <Evento numero="2" />
    <Form />
  </div>

)

}

export default App
