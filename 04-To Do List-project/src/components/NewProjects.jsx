import { useRef } from "react";
import Input  from "./Input";
import Modal from "./Modal.jsx";
export default function NewProjects({onAdd,onCancel}){
  const modal=useRef();
  
  const titleRef=useRef();
  const DesRef=useRef();
  const dateRef=useRef();
  function handelSave(){
    let enteredTitle=titleRef.current.value;
    let enteredDescription=DesRef.current.value;
    let enteredDate=dateRef.current.value;
    if(enteredTitle.trim()==="" || enteredDescription.trim()==="" || enteredDate.trim()===""){
    modal.current.open();
    return ;
    }
     onAdd({
      title:enteredTitle,
      Description:enteredDescription,
      DueDat:enteredDate
     })
   
  }
    return(
      <>
      <Modal ref={modal}>
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... Looks like you forget enter a value</p>
        <p className="text-stone-600 mb-4">please make sure you Provide a valid value for every input field.</p>
      </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
      <li>
      <button onClick={handelSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">save</button>
      </li>
      <li>
      <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>cancel</button>
      </li>
      </menu>
      <div>
       <Input type="text"  ref={titleRef} Label={"Title"} />
       <Input ref={DesRef} Label={"Description"} textarea />
       <Input  type="date" ref={dateRef} Label={"Due Date"} />
      </div>
      </div> 
      </> 
    );
}