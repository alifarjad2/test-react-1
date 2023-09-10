export default function List() {
  const list = ["1", "item2", "3", "..."];

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
            <button className="mr-4"> X </button>
          </div>
        );
      })}
    </div>
  );
}
