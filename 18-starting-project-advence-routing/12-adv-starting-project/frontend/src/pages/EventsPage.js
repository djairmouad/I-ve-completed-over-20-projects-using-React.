
import { Await, defer, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    const {events}=useLoaderData();

  return (
    
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading....</p>}>
    <Await resolve={events}>
      {(resolvedEvents)=>{return <EventsList events={resolvedEvents} />}}
    </Await>
      
      </Suspense>
    
  );
}

export default EventsPage;

 async function fetchEvents(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      throw new Response(JSON.stringify({message: "could not fetch events"}), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
    } else {
      const resData = await response.json();
      return resData.events;
    }
    
}

export function loader(){
  return defer({
    events:fetchEvents()
  })
}


