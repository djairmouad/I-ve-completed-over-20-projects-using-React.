import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter=useSelector(state=>state.Counter)
  const dispatch=useDispatch();
  function heandelIncriment(){
    dispatch({type:"Incrimet"});
  }
  function heandelDecriment(){
    dispatch({type:"dicriment"});
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={heandelIncriment}>Incriment</button>
      <button onClick={heandelDecriment}>Decriment</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
