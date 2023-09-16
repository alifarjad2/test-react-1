
import { useState } from "react";
import { List } from "./list";


export const Form = ()=>{
    const[list , setList] = useState([]);
    const[input , setInput] = useState("");

    const add = ()=>{
        // اگر نام ها تکراری بودند بتوانیم فقط یکی از انها را پاک کنیم اگر به ان ها ایدی ندهیم همه اسم های مشابه حذف میشوند و برای همین ارایه ای از ابجکت درست کردم
        const newName = {
        // در اینجا گفتم ایدی اخرین عنصر ارایه ام هرچی که هست بهش یکی اضافه کنه 
        //  -1 نوشتم برای اینکه اندیس اخرین عنصر به دست اید
        // چون در اول ارایه ی ما خالی هست باید بهش شرط بدیم که اگر طول ارایه 0 بود بیاد ایدی 1 رو نشون بده
            id : list.length === 0 ? 1 : list[list.length - 1].id +1 ,
            name : input
        }
// برای اپدیت کردن و وارد کردن نام جدید به لیست مقداراستیت اینپوت را با لیست ست میکنیم
        setList([...list , newName])
        console.log(list)}


    const deleteName =(nameId)=>{
        // اگر باهم مخالف باشند درست برمیگرداند وگرنه غلط
        const newlist = list.filter((n)=> nameId !== n.id )
        setList(newlist)
    }

    return (
    <div className="h-screen p-3 bg-slate-500 w-full flex flex-col items-center justify-start">
   

   <label htmlFor="input">Enter your name ...</label>
    <input 
          id="input"
          className="bg-slate-400 cursor-text h-7 w-44 text-center rounded-lg  text-black"
          type="text"
          onChange={(e)=>(setInput(e.target.value))} 
         />



    <div>
    <button 
        onClick={add}
        type="button"
        className="bg-blue-300 cursor-pointer h-7 w-44 rounded-lg m-5">
            Add NAME
    </button>

    <ul 
        className="text-center bg-slate-400 overflow-auto rounded-lg text-white">
        {list.map((item , index)=>{
            return(
                <List key={index} item={item} deleteName={deleteName} index={index} />
            )
        })}
           
    </ul>
    </div>
 </div>
    )
}