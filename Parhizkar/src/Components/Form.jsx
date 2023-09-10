import '../App.css'
import FarawinInput from './FarawinInput'
import { useState } from 'react'
import List from './List';
import { list } from 'postcss';


export default function Form(props){
    const [inputValue , setInputValue] = useState([]);

    const handleClickAdd = ()=>{
       props.text((prevTexts)=> [...prevTexts ,inputValue])
    }

    console.log(inputValue)
    return(
        <div>
            <FarawinInput input={setInputValue} />
            <button onClick={handleClickAdd} className='m-3 hover:bg-green-400 transition-all duration-500'>Add Text</button>
        </div>
        
    )
}