import { useState } from "react";

export const FarawinInput = ({setErsal}) => {
 

  return (
      <div>
        <input type="text"  className="h-12 mb-4 w-96 outline-none p-2 mx-auto " placeholder="Type Your Name ..." onChange={(e)=>{setErsal(e.target.value)}} />
      </div>
    );
  };