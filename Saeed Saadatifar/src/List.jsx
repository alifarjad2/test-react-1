export default function List({ nameList , setNameList }) {
  return (
    <div className="bg-green-400 h-full w-full p-4 flex flex-col items-start rounded-xl gap-4">
      {nameList.length > 0 ?
        (nameList.map((e , index) => (
          <div className="flex w-full border border-black p-2 rounded-xl">
            <div className="grow">{e}</div>
            <div className="text-red-600 cursor-pointer hover:text-white hover:underline" onClick={()=>{
                const a = [...nameList];
                a.splice(index , 1);
                setNameList(a)}}>delete</div>
          </div>)
        )) : (<div className="self-center text-black">Empty List</div>)}
    </div>
  );
}
