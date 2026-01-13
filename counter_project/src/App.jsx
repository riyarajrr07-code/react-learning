import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0);
  const addValue = ()=>{
   if(counter < 20){
     counter = counter + 1;
     setCounter(counter);
   }
  }
  const removeValue = () => {
    if (counter > 0) {     // ONLY change is here
      counter = counter - 1;
      setCounter(counter);
    }
  }
  return (
    <>
     <h1>mini project</h1>
     <h2>count value : {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br></br>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
