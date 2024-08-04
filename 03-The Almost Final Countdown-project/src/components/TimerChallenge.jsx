import { useState, useRef } from "react";
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState( targetTime*1000);
  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  } 

  const handleStart = () => {
    if (!timerIsActive) {
      timer.current = setInterval(() => {
        setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      }, 10);
    }
  };

  const handleStop = () => {
      clearInterval(timer.current);
      dialog.current.open(); 
  };

  const handleReset = () => {
    setTimeRemaining(targetTime*1000);
  };



  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} Second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Challenge Time is running....." : "Timer inactive"}
        </p>
        <button onClick={handleReset}>Reset Timer</button>
      </section>
    </>
  );
}
