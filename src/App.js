import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [counter,setCounter] = React.useState(0);
  // const increment = (value) => {
  //   setCounter(counter + value)
  //   console.log(counter)
  // }
  

  return (
    <div className="App">
     <h1>{counter}</h1>
     <button className='btn' onClick={function increment(value){
     setCounter(counter+ 1)
     }}>Increment</button>
     <button className='btn' onClick={function increment(value){
        if(counter <= 0){
          return
        // setCounter(1 + value)
        }else{
          setCounter(counter - 1)
        }
      
     }}>Decrement</button>

     <button className='btn' onClick={function increment(value){
       setCounter(counter * 2)
     }}>Double</button>
    </div>
  );
}
export default App;


