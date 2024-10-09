import {useContext} from 'react'
import { CounterContext } from '../contexts/Counter'
const Counter = () => {
  const counter = useContext(CounterContext)
  console.log(counter)
  
  const IncrementBtn = ()=>{
    return(
      counter.setCount(()=>counter.count+1)
    )
  }
  const DecrementBtn = ()=>{
    return(
      counter.setCount(()=>counter.count-1)
    )
  }
  return (
    <>
      <button onClick={IncrementBtn}>Increment</button>
      <button onClick={DecrementBtn}>Decrement</button>
    </>
  )
}

export default Counter
