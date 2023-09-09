import { useState } from 'react';
import '../App.css'


export default function List(props){

    const userTexts = props.textListing;
    console.log(userTexts)

    const handleDelete = (index) => {
        const updatedTexts = [...userTexts];
        updatedTexts.splice(index, 1);
        props.setTextListing(updatedTexts);
      };

    return(
        <div className='bg-red-400 w-full rounded-lg h-fit p-5 flex flex-col'>
            {<ol>
                {
                userTexts.length > 0 ? 
               ( userTexts.map((text ,index)=>{
                   return (
                        
                        <div key={index} className='flex flex-col my-2'>
                            <div className='flex gap-5'>
                                    <p className='bg-yellow-300 p-2 rounded-lg'>{index+1}</p>
                                    <li className='grow bg-green-400 rounded-lg p-2 text-white'>{text}</li>
                                <button onClick={()=>handleDelete(index)}>Del</button>
                            </div>
                        </div>
                   )
                   
                })):(<p className='bg-green-400 p-2 rounded-lg'>Empty List</p>)}
            </ol>}
                {/* {userTexts} */}
                
        </div>
    )
}