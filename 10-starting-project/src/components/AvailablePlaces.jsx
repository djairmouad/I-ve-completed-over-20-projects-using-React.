import { useState } from 'react';
import Error from './Error.jsx';
import Places from './Places.jsx';
import {FeachHttp} from '../http.js';
import { useEffect } from 'react';
export default function AvailablePlaces({ onSelectPlace }) {
  const [fetching,SetFetching]=useState(false);
  const [availablePlace,SetAvilibalePlace]=useState([])
  const [error,setError]=useState();
  useEffect(() => {
    async function FetchPlace(){
      SetFetching(true);
       
      try{
      const place= await FeachHttp();
      console.log(place);
        SetAvilibalePlace(place);
      }catch(error){
      setError({message:error.message || "handeal Error"});
      } 
      
      SetFetching(false);
    }
    FetchPlace();
    
  }, []);
  if(error){
    return <Error title={"An error occurred!"} message={error.message} />
  }
  return (
    <Places
      title="Available Places"
      isLoading={fetching}
      textLoading={"Is  Loading"}
      places={availablePlace}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
