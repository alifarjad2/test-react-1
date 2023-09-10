import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";

export default function FormAuth() {
  const [listAsli, setListAsli] = useState([]);
  console.log("List ASLI 2 = ",listAsli);
  

  return (
    <>
      <Form listAsli={listAsli} setListAsli = {setListAsli} />

      {listAsli ? (
        listAsli.map((item) => <List key={item.index} listAsli={item} />)
      ) : (
        <List />
      )}
    </>
  );
}
