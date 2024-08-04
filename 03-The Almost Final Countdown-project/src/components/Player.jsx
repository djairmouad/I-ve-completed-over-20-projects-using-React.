import { useState,useRef } from "react";
export default function Player() {
  const [enterPlayerName,setEnterPlayerName]=useState("");
  const playerName=useRef();
  function handealClick(){
   setEnterPlayerName(playerName.current.value);
   playerName.current.value="";
  }
  return (
    <section id="player">
      <h2>Welcome { enterPlayerName===""? "Unkown  entity" :enterPlayerName }</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handealClick}>Set Name</button>
      </p>
    </section>
  );
}
