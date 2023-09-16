import { useState } from 'react'
import '../App.css'

// Main func with props passed
export default function FarawinInput (props){
    // An arrow func for getting input Values which is working with onchange event
    const handleOnChange = (event)=>{
        const text = event.target.value;
        props.input(text)
    }
    return (
        <div>
            <input className='p-2 border-slate-800 border-2 rounded-md outline-none' onChange={handleOnChange}  type="text"  />
        </div>
    )
}