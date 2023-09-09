import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";



export default function FormAuth() {
  const[listAsli , setListAsli]=useState("")
console.log(listAsli);
  const updateList = (v) => {
setListAsli (v)
  }
  
  return (
  <>
  <Form state = {updateList}/>
  
  {listAsli
          ? listAsli.map((item) => (
              <List
                key={item.index}
                listAsli={item}
              />
            ))
          : <List
        />}


  </>
  
  
  )
}
