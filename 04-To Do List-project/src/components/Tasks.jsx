import { useState } from "react";
import NewTask from "./NewTask.jsx";
export default function Tasks({addTask,deleteTask,tasks}){
    // const [valueInputs,setValueInputs]=useState([])
    // function handleValue(value) {
    //     setValueInputs((c) => {
    //       const newArray = [...prevValue, value];
         
    //       return newArray;
    //     });
         
    //   }
    return(
        <section>
            <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
            <NewTask  addTask={addTask}/>
            
            { tasks.length===0 && <p className="text-stone-800 my-4">
                this Project does not have any tasks yet. 
            </p>}
             {  tasks.length>0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">{ tasks.map(task=><li className="flex justify-between my-4" key={task.id}>
             <span>{task.text}</span>
             <button className="text-stone-700 hover:text-red-500" onClick={()=>deleteTask(task.id)}>Clear</button>
             </li>)}</ul>}
             {/* {<ul>{valueInputs.map(task=><li>{task}</li>)}</ul>} */}
        </section>
    )
}