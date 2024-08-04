import React from "react";
import { redirect } from "react-router-dom";


export function actionLogout(){
    localStorage.removeItem("token");
    return redirect("/")
}