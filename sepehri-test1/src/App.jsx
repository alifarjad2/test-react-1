import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function App() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <Form msg={msg} setMsg={setMsg} list={list} setList={setList} />
      <List list={list} />
    </>
  );
}
