import { useState } from "react";

export const FarawinInput = ({setErsal}) => {
 

  return (
      <div>
        <input type="text"  className="bg-green-400 " onChange={(e)=>{setErsal(e.target.value)}} />
      </div>
    );
  };