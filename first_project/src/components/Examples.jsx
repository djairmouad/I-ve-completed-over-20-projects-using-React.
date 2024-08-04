import { useState } from "react";
import TabButton from "./TabButton.jsx";
import {EXAMPLES}from "../data.js";

export  function Examples(){
    const[selectedTopic,setselectedTopic]=useState("");
    function handelSelect(SelectedButton){
        setselectedTopic(SelectedButton);
      };
return(
<section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isselected={selectedTopic==="Components"} onSelect={()=>handelSelect("Components")}>Components</TabButton>
          <TabButton isselected={selectedTopic==="JSX"}  onSelect={()=>handelSelect("JSX")}>JSX</TabButton>
          <TabButton isselected={selectedTopic==="Props"}  onSelect={()=>handelSelect("Props")}>Props</TabButton>
          <TabButton isselected={selectedTopic==="State"}  onSelect={()=>handelSelect("State")}>State</TabButton>
        </menu>
        {!selectedTopic ? (<p>Please Select a Topic.. </p>): (<div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
           <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
           </pre>
        </div> )}
        </section>
);
}