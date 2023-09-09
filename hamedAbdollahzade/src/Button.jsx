export const Button = (prop) => {
    return (
      
     <div>
      <button type="button" className="border border-black rounded-full text-sm p-1 m-2 bg-slate-500 hover:bg-white" onClick={()=>{return prop.ersal("")}}>Send Message</button>
     </div>
    );
  };
  