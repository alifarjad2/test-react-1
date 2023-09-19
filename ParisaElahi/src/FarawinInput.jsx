import { useState } from "react";
// gereftane props haye pas dade shode
export default function FarawinInput({ text, setText }) {
  // tarife function baraye update meghdare text ba gereftane value va pas dadan be settxt
  const texthandler = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <div>
      <div className="bg-[#306568] justify-center item-center w-1/2  m-auto rounded-2xl flex p-4 ">
        <div className="mt-2 " />
        <input
          value={text}
          onChange={texthandler}
          type="text"
          placeholder="متن خود را وارد کنید ..."
          className=" w-full dir-auto text-right pr-[4px] pl-6 rounded-xl bg-transparent text-white focus:outline-0"
        />
      </div>
    </div>
  );
}
