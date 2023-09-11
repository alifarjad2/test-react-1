import React from 'react';

function Farawininput({value,onChange}) {
   
   
   
    const handleSubmit = (e) => {
        e.preventDefault();
    
      };



  return <>
  <form onSubmit={handleSubmit}>
        <input className=" w-full rounded border-2 bg-transparent px-3"
         type="text"
      
        value={text}
        onChange={handlechanche}
         />
        
     </form>
    
  </>

}

export default Farawininput;