import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


export async function action({ request }) {
  const url = new URL(request.url); // Added .url to get the URL from the request object
  const searchParams = url.searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();

  if (mode !== "login" && mode !== "signup") { // Corrected the condition to use "&&" instead of "||"
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Error" }, { status: 500 });
  }
   
  const resData=await response.json();
  const token=resData.token;
  localStorage.setItem("token",token);
  return redirect("/");
}
