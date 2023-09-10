import FarawinInput from "./FarawinInput";
import Button from "./Button";
import { useRef, useState } from "react";

export default function Form({ nameList, setNameList }) {
  const [inp, setInp] = useState("");
  const [firstUse, setFirstUse] = useState(true);

  function nameValid(i) {
    if (i.length < 3) return false;
    return true;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-6">
        <label htmlFor="1" className="self-start">
          Name:
        </label>
        <FarawinInput
          vl={inp}
          setInp={setInp}
          setFirstUse={setFirstUse}
        ></FarawinInput>
        {!nameValid(inp) && !firstUse && (
          <p className="text-[10px] self-end pr-2 text-red-800">
            Type 3 Character Or More
          </p>
        )}
      </div>

      <Button
        inpValue={inp}
        setFirstUse={setFirstUse}
        setVL={setInp}
        nameList={nameList}
        setNameList={setNameList}
        validation={nameValid(inp)}
      ></Button>
    </div>
  );
}
