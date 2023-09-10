import { useState } from "react";
import Form from "./Form";
import List from "./List";
export default function App() {
  const [value, setValue] = useState("");
  const [listitem, setListitem] = useState([]);

  return (
    <div className="w-full h-full bg-slate-200 flex flex-col">
      <Form
        setValue={setValue}
        setListitem={setListitem}
        listitem={listitem}
        value={value}
      />
      <List listitem={listitem} />
    </div>
  );
}
