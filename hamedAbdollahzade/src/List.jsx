export const List = (prop) => {
    return (
      
       <>
       {
        
        <div className="bg-red-400 flex flex-col justify-center items-center mx-auto w-3/4">
       {prop.listAsli ? prop.listAsli : "Empety"}
       
       </div>
       }
       </>
       
      
    );
  };
  