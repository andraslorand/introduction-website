import React, { useState, useEffect } from "react";

export default function Todo(props) {
    //ez arra van hogy az elemekkel tudjumk dolgozni es hogy azokat tudjuk beirni
  const [task, setTask] = useState("");

    //ez pedig tartalmazza magat az elemeket a listaban, ide irodik be minden
  const [tasks, setTasks] = useState([]);


  //ez useEffect lehetove teszi hogy valtoztatasokat hajtunk vegre az elemekben
  //itt a localstoragebol vesszuk ki az adatokat es azokat beirjuk a taskok listajaba
  const localTasks=props.name
  useEffect(()=>{
      if(localStorage.getItem(localTasks)){
          const storedList = JSON.parse(localStorage.getItem(localTasks));
          setTasks(storedList);
      }
  },[])


  //itt adjuk hozza az elemeket a taszkok listajahoz es a localstoragehoz
  //ha letezik a task, akkor azzal tovabb dolgozunk
  const addTask = (e) => {
    if (task) {
        //local storagenal kell egy id maiszerint el tudjuk erni az elemet, meg kell maga az elem
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem(localTasks, JSON.stringify([...tasks, newTask]));
      setTask("");      //itt a kezdeti ertelet semmisre tesszuk szoval ujralehet bele irni
    }
  };

  //torles
  //a filter metodus torli azokat az elemeket, amelyekre fales erteket kap es visszaterit egy uj tombot
  //ezt a tombot irjuk be a local storageba
  const handleDelete = (task)=>{
      const deleted = tasks.filter((t)=>t.id !== task.id);
      setTasks(deleted);
      localStorage.setItem(localTasks, JSON.stringify(deleted))
  }


  //torol mindent, erre van a removeItem fuggveny
  const handleClear=()=>{
      setTasks([]);
      localStorage.removeItem(localTasks);
  }

  //67 as sor: setTask itt kapja meg az erteket amivel dolgozzon

  //80 as sortol lefele a taszkok tomb hosszaval dolgozik, megadja a tombhosszat, az az hogy mennyi elem ven benne
  
  //88 as tol a map() fuggveny vegigmegy a taskok tombjen es minden elemre legeneralja a kinezetet
  //itt meg van adva az id kulcs, hogy lehessen hiveatkozni az elemre valtozas eseten

  //105 sornal ha van barmilyen elem is a tomben, akkor letrehozza a clear gombot maskepp nincs ilyen
  return (
    <div className="taskmain">
      <div className="addtask">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="addbtn"
          onClick={addTask}
        >
          add
        </button>
        <div >
        You have
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? " 1 task"
          : tasks.length > 1
          ? ` ${tasks.length} tasks`
          : null}
      </div>
      </div>
     
     
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
            <div className="task">
                <div className ="name">
                    {task.title}
                </div>
                <button
                
                onClick ={()=> handleDelete(task)}
                >delete</button>
            </div>

        
        </React.Fragment>
      ))}
      {!tasks.length ? null:(
          <div>
              <button  onClick={()=>handleClear()}>
                  Clear
              </button>
          </div>
      )}
    </div>
  );
}