import { useState } from 'react'
import '../App.css'

export default function FarawinInput (props){
    
    const handleOnBlur = (event)=>{
        const text = event.target.value;
        props.input(text)
    }
    return (
        <div>
            <input className='p-2 border-slate-800 border-2 rounded-md outline-none' onChange={handleOnBlur}  type="text"  />
        </div>
    )
}