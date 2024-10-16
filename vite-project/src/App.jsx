import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  
  function soma(a, b){
    return a + b
  } 
  

return (
  <div className='App'>
    <h1>{soma(1, 2)}</h1>
    <HelloWorld />
  </div>

)

}

export default App
