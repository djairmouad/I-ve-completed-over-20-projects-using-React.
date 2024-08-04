import { useState } from "react";

export default function Login() {
  const [enterValues,setEnterValues]=useState({
    email:"",
    password:""
  });
  function heandelInput(Identifier,value){
 setEnterValues(prevValues=>(
  {...prevValues,
    [Identifier]:value
  }
 ))
  }
  function handelSubmit(event){
  event.preventDefault();
  console.log(`email:${enterValues.email} and password:${enterValues.password}`);
  }
  return (
    <form onSubmit={handelSubmit}> 
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>heandelInput("email",event.target.value)} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>heandelInput("password",event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
