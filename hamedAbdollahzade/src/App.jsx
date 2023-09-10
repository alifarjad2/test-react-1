import { useEffect, useState } from "react";
import { Form } from "./Form";
import { List } from "./List";

export default function App() {
  const [listAsli, setListAsli] = useState([]);
  console.log("List ASLI 2 = ", listAsli);

  return (
    <div>
      
        <Form listAsli={listAsli} setListAsli={setListAsli} />
      
      
        <List listAsli={listAsli} setListAsli={setListAsli} />
      
    </div>
  );
}
