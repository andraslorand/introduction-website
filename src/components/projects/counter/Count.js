import { useEffect } from 'react';
import { useState } from 'react';

function Count() {
  const [number,setNumber]=useState(0)
  useEffect(()=>{
    if(localStorage.getItem("currentNumber")){
      const num=JSON.parse(localStorage.getItem("currentNumber"))
      setNumber(num)
    }
  },[])

  const addNumber=()=>{
    if(number!==99){
    const numplus=number+1
    setNumber(numplus)
    localStorage.setItem("currentNumber",JSON.stringify(numplus))
    }
    else{
      alert("cant be heigher than 99")
    }
  }

  const decreaseNumber=()=>{
    if(number!==0){
    const numde=number-1
    setNumber(numde)
    localStorage.setItem("currentNumber",JSON.stringify(numde))
    }
    else{
      alert("cant be lower than 0")
    }
  }
  const reset=()=>{
    setNumber(0)
    localStorage.setItem("currentNumber",JSON.stringify(0))
  }
  return (
    <div className="App">
      <button onClick={addNumber}>+</button>
      <input  value={number}></input>
      <button onClick={decreaseNumber}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Count;
