import { Form, redirect, useActionData, useNavigate } from 'react-router-dom';
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const data = useActionData();

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event ? event.title : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ""}
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request,params}){
  const fd=await request.formData();
  const data={
      title:fd.get("title"),
      image:fd.get("image"),
      date:fd.get("date"),
      description:fd.get("description"),
  };
  
  const id=params.id;
  const method=request.method;
  let url="http://localhost:8080/events";
  if(method==="PATCH"){
    url=`http://localhost:8080/events/${id}`;
  }
  const respons=await fetch(url,{
      method:method,
      headers:{
          'Content-Type':"application/json"
      },
      body:JSON.stringify(data)
  })
  if(respons.status===422){
     return respons;
  }
  if(!respons.ok){
      throw new Response(JSON.stringify({message:"error"}),{status:500})
  }
  return redirect("/events")
  }

