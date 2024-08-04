import { forwardRef, useImperativeHandle, useRef } from "react";

 const Input= forwardRef( function Input({textarea ,Label ,...prop},ref){
    const input=useRef();
    const classs="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
return(
    <p className="flex flex-col gap-1 my-4">
    <label className="text-sm font-bold uppercase text-stone-500">{Label}</label>
    {textarea ? <textarea ref={ref} className={classs} {...prop}/>:<input ref={ref}  className={classs}{...prop}/>}
    </p>
);
})
export default Input;