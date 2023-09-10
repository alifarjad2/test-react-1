export default function List({ list }) {
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
