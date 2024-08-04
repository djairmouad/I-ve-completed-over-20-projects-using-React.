import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime,SetRemainingTime]=useState(3000);
  useEffect(
    ()=>{
     const end= setInterval(()=>{
        SetRemainingTime(prevTim=>prevTim-10);
        console.log("hello");
      },10)
      const timer=setTimeout(()=>{
        onConfirm();
        console.log("yes");
      },3000);
      
      return ()=>{
        clearTimeout(timer);
        clearInterval(end);
      }
    }
    ,[onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={3000}/>
    </div>
  );
}
