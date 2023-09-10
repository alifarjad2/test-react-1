import { useState } from "react";
import FarawinInput from "./FarawinInput";

//1- first just add needed components
export default function Form({ setList }) {
  //input state must be here to use it in button
  //then pass it via props to FarawinInput
  const [text, setText] = useState("");
  return (
    <div>
      {/* i pass state as array like useState return array*/}
      <FarawinInput state={[text, setText]} />
      <button onClick={() => setList((list) => [...list, text])}>
        add text to list
      </button>
    </div>
  );
}
