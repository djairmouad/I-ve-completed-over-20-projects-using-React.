import Header from './components/Header.jsx';
import User from './components/User.jsx';
import Results from './components/Results.jsx';
import React, { useState } from 'react';
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
   const validInput= userInput.duration>=1;
  const updateUserInput = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue,
    }));
  };
  return (
    <>
    <Header />
    
      <User  input={updateUserInput} userInput={userInput}/>
      {validInput? (<Results input={userInput}/>):(<p className='center'>Please Enter Valid Input Data</p>)}
    </>
  )
}

export default App
