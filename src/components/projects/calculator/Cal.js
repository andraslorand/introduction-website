
import { useState } from "react";
import { useEffect } from "react";

function Cal() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrew] = useState('');
  const [equ, setEqu] = useState(0);
  const [calculating, setCalculating] = useState();

  //nem jo a countos megoldas, prev vagy valami hasonlo kell

  const createnumber = (v) => {
    const newNumber = current * 10 + v;
    console.log(newNumber);
    setCurrent(newNumber);
  };
  const adding = () => {
    setPrew(current);
    setCurrent(0);
    console.log("the current is :" + current);
    console.log("the pre is :" + prev);

    setCalculating("+");
  };
  const kivonas = () => {
    setPrew(current);
    setCurrent(0);
    console.log("the current is :" + current);
    console.log("the pre is :" + prev);

    setCalculating("-");
  };
  const szor = () => {
    setPrew(current);
    setCurrent(0);
    console.log("the current is :" + current);
    console.log("the pre is :" + prev);

    setCalculating("x");
  };
  const osztas = () => {
    setPrew(current);
    setCurrent(0);
    console.log("the current is :" + current);
    console.log("the pre is :" + prev);

    setCalculating("/");
  };
  const szazalek = () => {
    setPrew(current);
    setCurrent(0);
    console.log("the current is :" + current);
    console.log("the pre is :" + prev);

    setCalculating("%");
  };

  const clear=()=>{
    setEqu(0);
    setPrew('');
    setCurrent(0);
    setCalculating("")
  }

  const equal = () => {
    let a = 0;
    if (calculating === "+") {
      a = current + prev;
    }
    if (calculating === "-") {
      a = prev - current;
    }
    if (calculating === "x") {
      a = current * prev;
    }
    if (calculating === "/") {
      a = prev / current;
    }
    if (calculating === "%") {
      a = prev % current;
    }

    setEqu(a);
    setPrew('');
    setCurrent(a);
    setCalculating("")
    console.log(a);
  };

  //az ertekek adasa valamijert nem megy, ha target-et hasznalok, elejebe tesz egy 0-ast es az pedig elrontja a szamolast
  return (
    <div className="App">
      <div className="screen">
        <input value={prev}></input>
        <input value={calculating}></input>
        <input value={current}></input>
      </div>
      <div className="keyboard">
        <div className="spread">
          <button onClick={()=>clear()}>C</button>
          <button>+/-</button>
          <button onClick={() => szazalek()}>%</button>
          <button onClick={() => osztas()}>/</button>
        </div>
        <div className="spread">
          <button value={7} onClick={() => createnumber(7)}>
            7
          </button>
          <button value={8} onClick={() => createnumber(8)}>
            8
          </button>
          <button value={9} onClick={() => createnumber(9)}>
            9
          </button>
          <button onClick={() => szor()}>x</button>
        </div>
        <div className="spread">
          <button value={4} onClick={() => createnumber(4)}>
            4
          </button>
          <button value={5} onClick={() => createnumber(5)}>
            5
          </button>
          <button value={6} onClick={() => createnumber(6)}>
            6
          </button>
          <button onClick={() => kivonas()}>-</button>
        </div>
        <div className="spread">
          <button value={1} onClick={() => createnumber(1)}>
            1
          </button>
          <button value={2} onClick={() => createnumber(2)}>
            2
          </button>
          <button value={3} onClick={() => createnumber(3)}>
            3
          </button>
          <button onClick={() => adding()}>+</button>
        </div>
        <div className="spread">
          <button onClick={() => createnumber(0)}>0</button>
          <button>.</button>
          <button onClick={() => equal()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Cal;
