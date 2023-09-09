import { useState } from "react";

export const FarawinInput = (prop) => {
  const[inputValue , setInputValue] = useState("") 
  
  const handlerInput = (v) => {
   return prop.value(inputValue)
  } 
  
  return (
      <div>
        <input type="text" value={inputValue} className="bg-green-400 " onChange={(e)=>{return setInputValue(e.target.value),handlerInput(inputValue)}} />
      </div>
    );
  };