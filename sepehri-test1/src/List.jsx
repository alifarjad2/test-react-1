export default function List({ list }) {
  console.log(list);
  return (
    <div className="w-80 bg-red-400 p-8 m-auto mt-5 rounded-md text-center">
      {list.map((row, index) => {
        return (
          <div className="border-[1px] mb-1">
            <span>{(index + 1).toLocaleString('fa-ir')}</span>
            {row}
          </div>
        );
      })}
    </div>
  );
}
