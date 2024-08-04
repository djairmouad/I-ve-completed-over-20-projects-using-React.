import { useRef } from "react";

export default function NewTask({addTask}){
    const Input=useRef();
    function handelChange(){
        const newValue=Input.current.value;
        if(newValue.trim()===""){
            return;
        }else{
        addTask(newValue);
        Input.current.value="";
    }
    } 
    return(
        <div className="flex items-center gap-4">
            <input  ref={Input}type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"  />
            <button onClick={handelChange} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}