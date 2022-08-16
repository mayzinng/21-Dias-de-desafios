import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="hello">Hello world!</h1>
      <div id="box-welcome"></div>
    </div>
  )
}


const boxWelcome = document.querySelector('.hello');
const welcome = document.querySelector('#box-welcome')
boxWelcome.onmouseover = function() {
  welcome.innerHTML = '<h3>Seja bem-vindo à aplicação :)</h3>'
}
boxWelcome.onmouseout = function() {
  welcome.innerHTML = ''
}

console.log(boxWelcome)

export default App
