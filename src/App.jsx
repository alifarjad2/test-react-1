import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";



export default function FormAuth() {
  const[listAsli , setListAsli]=useState("")

  const updateList = (v) => {
setListAsli([...listAsli] , v)
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
