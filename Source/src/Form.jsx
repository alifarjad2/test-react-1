import { useState } from "react";
import FarawinInput from "./FarawinInput";

//1- first just add needed components
export default function Form({ setList }) {
  //input state must be here to use it in button
  //then pass it via props to FarawinInput
  const [text, setText] = useState("");
  return (
    <>
      {/* i pass state as array like useState return array*/}
      <FarawinInput state={[text, setText]} />
      <button
        className="bg-[#2E333D] flex w-auto ml-3 mr-1 mx-3 rounded-2xl p-2 px-8 mt-2 hover:bg-[#586c93]"
        onClick={() => setList((list) => [...list, text])}
      >
        add text to list
      </button>
    </>
  );
}
