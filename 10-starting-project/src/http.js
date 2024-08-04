export  async function FeachHttp(){
    const response=await fetch("http://localhost:3000/places");
    const resData=await response.json();
    if(!response.ok){
      return new Error();
    }
    console.log(resData.places);
    return resData.places;
}

export  async function FeachUserplaces(){
    const response=await fetch("http://localhost:3000/user-places");
    const resData=await response.json();
    if(!response.ok){
      return new Error();
    }
    console.log(resData.places);
    return resData.places;
}

export async function UpdateUserPlaces(places){
const response=await fetch("http://localhost:3000/user-places",{
  method:'PUT',
  body:JSON.stringify({places}),
  headers:{
    "Content-Type":'application/json'
  }
}
)
const resData= await response.json();
if(!response.ok){
  return new Error();
}
return resData.message;
}