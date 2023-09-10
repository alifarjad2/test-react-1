import { useState } from "react";
import "./App.css";
import farawin from "farawin";
import Form from "./Form";
import List from "./List";

function App() {
  const [nameList, setNameList] = useState([]);
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-zinc-600 p-10 rounded-xl w-[800px]">
      <Form nameList={nameList} setNameList={setNameList} />
      <List nameList={nameList} setNameList={setNameList}></List>
    </div>
  );
}

export default App;
