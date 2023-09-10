export default function List({ list, setList }) {
  return (
    <>
      {/* here key really is index */}
      {list.map((item, index) => {
        return (
          <div key={index} className="flex mt-4">
            {/* for radif */}
            <span className="bg-[#2E333D] flex w-auto  rounded-2xl p-2 px-8 mt-2">
              {index + 1}
            </span>

            <span className="bg-[#2E333D] flex  mr-1 w-auto  rounded-2xl p-2 px-8 mt-2">
              {item}
            </span>

            {/* for delete */}
            <button
              className="bg-[#2E333D] flex w-auto mr-1 rounded-2xl p-2 px-8 mt-2 hover:bg-[#586c93]"
              //just delete one item from index
              //for delete filter list to remove item in that index(key)
              onClick={() => setList(list.filter((row, i) => i !== index))}
            >
              X
            </button>
          </div>
        );
      })}

      {list.length === 0 && "(list is empty)"}
    </>
  );
}
