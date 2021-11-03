import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement}  from './actions/index';
import Onboarding from "./components/Onboarding"


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const[hookCounter, setHookCounter] = useState(0)




  return (
    <div className="App">
      <Onboarding/>

      <h1>Redux Counter {counter}</h1>
      <button onClick={ ()=> dispatch(increment(1))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>

      <h1> Hook Counter {hookCounter}</h1>
      <button onClick={ ()=> setHookCounter((prevCount) => prevCount +1)}>+</button>
      <button onClick={()=> setHookCounter((prevCount) => prevCount -1)}>-</button>


    </div>
  );
}

export default App;
