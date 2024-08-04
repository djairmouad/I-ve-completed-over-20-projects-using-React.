import { useEffect,useState } from "react";

export default function useFetch(fetchFn,initialValue){
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchData,setFetchData]=useState(initialValue);
    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setFetchData(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch Data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, [fetchFn]);
      return{
        isFetching,
        error,
        fetchData,
        setFetchData
      }
}