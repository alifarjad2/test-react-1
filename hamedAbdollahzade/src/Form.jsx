import { useState } from "react";
import { Button } from "./Button";
import { FarawinInput } from "./FarawinInput";

export const Form = (prop) => {
  const [list, setList] = useState("");
  const [ersal, setErsal] = useState(false);
  
  const handlerList = (v) => {
    setList(v)
    console.log(list);
    console.log(ersal);
    return ersal ?  prop.state([...list] , list) :  "" ;
  };
  const ersalList = () => {
    setErsal (!ersal)
  }
  
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <FarawinInput value={handlerList} />
      <Button ersal = {ersalList} />
    </div>
  );
};
