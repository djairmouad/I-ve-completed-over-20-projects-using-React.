import React from "react"
import {redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from '../components/EventItem';
export default function EditDetailPage(){
    
    const data=useRouteLoaderData("event-detail");
    console.log(data);
    return <>
        <EventItem event={data.event}/>
    </>
}

export async function eventItemLoader({request,params}){
    const id=params.id;
    const response=await fetch(`http://localhost:8080/events/`+id);
    if(!response.ok){
        throw new Response(JSON.stringify({message:"could not fetch the item event"}),{status:500});
    }else{
     return response;
    }
    

}
export async function action({request,params}){
    const id=params.id;
    const response=await fetch(`http://localhost:8080/events/`+id,{
        method:request.method,
    });
    if(!response.ok){
        throw new Response(JSON.stringify({message:"could not Delet the item event"}),{status:500});
    }
    return redirect("/events")
}