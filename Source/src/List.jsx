export default function List({ list, setList }) {
  return (
    <div>
      {/* here key really is index */}
      {list.map((item, index) => {
        return (
          <div key={index}>
            {/* for radif */}
            <span> {index + 1} _ </span>
            {/* for delete */}
            {item}
            <button
              className="mr-4"
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
    </div>
  );
}
