<<<<<<< HEAD
import FarawinInput from "./FarawinInput.jsx";
// gereftane props ha dar component
export default function Form({ text, setText, list, setList }) {
  // tarife function baraye ezafe kardane text be list ba click ruye button
  // negahdari meghadire list ba tarife spread operator va ezafe kardane text be an va ba click input khali mishavad
  const addhandler = () => {
    setList((list) => [...list, text]);
    setText("");
  };
  return (
    <>
      <div className="h-28 "></div>
      <div className="flex-col justify-center item-center m-auto mb-32 rounded-2xl ">
        <FarawinInput text={text} setText={setText} />
        <button
          type="button"
          className="hover:bg-[#576437] bg-[#4d9179] w-1/6 overflow-hidden p-2 border mt-2 border-hidden text-2 rounded-full flex mr-[42%] justify-center item-center"
          onClick={addhandler}
        >
          افزودن به لیست
        </button>
      </div>
=======
import farawin from "farawin";
import { useState, useEffect } from "react";
export default function Form() {
  const [text, setText] = useState("");

  return (
    <>
      <form className="bg-slate-500 justify-center item-center w-[600px] h-[100px] mx-[30%] my-[20%] rounded-xl flex p-10">
        <h1 className="font-bold text-center text-[2.5rem] h-4 m-2 mb-8"></h1>
        <button
          type="button"
          className="hover:bg-blue-400 w-20 border text-sm rounded-lg mx-2"
        >
          حذف
        </button>

        <button
          type="button"
          className="hover:bg-blue-400 w-20  border text-sm rounded-lg mx-2"
        >
          افزودن
        </button>
        <label className=" m-1 mt-4 text-sm ">{""}</label>

        <div className="mt-2" style={{ position: "relative" }} />
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="متن خود را وارد کنید"
          className=" w-full cursor-pointer text-md text-end border-b-[1.7px] pl-6 focus:outline-0"
        />
      </form>
>>>>>>> 6879a90bb3557c73861d1683e2c8d0190e3bc15d
    </>
  );
}
