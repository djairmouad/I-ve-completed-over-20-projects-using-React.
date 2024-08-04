const redux=require("redux");

const counterReducer=(state={counter:0},action)=>{
    if(action.type==="Incriment"){
        return {counter:state.counter+2}
    }
    if(action.type==="Dincriment"){
        return {counter:state.counter-1}
    }
    return state
}
 const store=redux.createStore(counterReducer);

 conterSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState); 
 }
 
 store.subscribe(conterSubscriber);
 store.dispatch({type:"Incriment"});
 store.dispatch({type:"Dincriment"});