<<<<<<< HEAD
import { useState } from "react";
import Form from "./Form.jsx";
import List from "./List.jsx";

export default function App() {
  // tarife state haye text va list dar inja baraye dastresi rahat az parent be children dar component

  // tarife state text baraye gereftan va zakhire sazi text vared shode dar input
  const [text, setText] = useState("");

  //  zakhire text ha be surate list ke state bayad be surate araye tarif shavad
  const [list, setList] = useState([]);

  // pas maghadir ra be surate props be componente pas dadam  ...
  return (
    <div className=" h-full  bg-[#34393C] ">
      <Form text={text} setText={setText} list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
=======
// import React from "react";
// import ReactDOM from "react-dom/client";
import Form from "./Form.jsx";

export default function App() {
  return (
    <>
    <Form/>
    </>
  )
>>>>>>> 6879a90bb3557c73861d1683e2c8d0190e3bc15d
}
