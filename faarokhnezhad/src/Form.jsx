import React, { useState } from "react";
import Farawininput from "./farawininput";
import Button from "./button";

const Form = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  


  const handlechanche = (e) => {
    setText(e.target.value)
  };

  const handleAdd=()=>{
    if (text !==''){
        setList([...list, text]);
        setText("");
    }
  }

  return <div>
    <Farawininput value={text} onchange={handlechanche} />
   <Button onClick={handleAdd} text="add"/>
  </div>
};
export default Form
