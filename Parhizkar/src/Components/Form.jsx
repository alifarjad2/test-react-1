import '../App.css'
import FarawinInput from './FarawinInput'
import { useState } from 'react'
import List from './List';
import { list } from 'postcss';

// Main func with props passed
export default function Form(props){
    // A state for getting input Values and passing it 
    const [inputValue , setInputValue] = useState([]);
    // An arrow func for getting input values and add them to a new array with onclick event for a button
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