import { useState } from "react";
import { Button } from "./Button";
import { FarawinInput } from "./FarawinInput";

export const Form = ({ listAsli, setListAsli }) => {
  const [ersal, setErsal] = useState("");
  

  const ersalList = () => {
    console.log("fun ersal called ... ");
    setListAsli([...listAsli , ersal])

  };
  
  console.log("ersal = ",ersal , "list asli 1 = " , listAsli);

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <FarawinInput setErsal={setErsal} />
      <Button ersal={ersalList} />
    </div>
  );
};
