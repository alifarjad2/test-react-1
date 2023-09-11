
import { Input } from "./components/input"
import { useState } from "react";
export const Form = ()=>{
    const[input , setInput] = useState("");

    const handell =(e)=>{
        setInput(e.target.value)
    }

    return(
    <div className="h-screen bg-slate-500 w-screen flex flex-col items-center justify-start rounded-lg">
   
    <Input           
    value={input}
    type="text"
    onChange={handell} />

    <div>
    <button 
        type="button"
        className="bg-blue-300 h-7 w-40 rounded-lg m-6">
                Add
        </button>
        </div>
 </div>
    )
}