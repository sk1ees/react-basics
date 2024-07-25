import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './contexts/Counter'
function App() {

const counterState = useContext(CounterContext);
console.log(counterState);
  return (
    <>
   <h1>Count is : {counterState.count}</h1>
   <Counter/>
   <Counter/>
   <Counter/>
   <Counter/>
    </>
  )
}

export default App
