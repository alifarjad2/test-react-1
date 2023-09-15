export const List = (props)=>{
    return(
        <ul className="flex flex-row ">
                    {/* چون ابجکت هست حتما باید بگیم که فقط نام رو نشان دهد چون نمیتونه کل ابجکت رو نشون بده */}
                    <li className="p-2">{props.index}_{props.Nname}</li>
                    <button 
                    className="bg-slate-400 m-2 rounded-md"
                    // برای حذف کردنش هم از ایدی استفاده کردم که در بالا گفتم برای اینکه اگر اسم های مشابه وجود داشت همش حذف نشه
                    onClick={()=>props.deleteName(props.Nname.id)}>delete</button>
                </ul>
    )
}