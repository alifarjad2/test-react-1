export default function FarawinInout({
  setValue,
  value,
  setListitem,
  listitem,
}) {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  //console.log(listitem);
  return (
    <div className="">
      <input
        type="text"
        value={value}
        onChange={handleInput}
        className="bg-red-200 w-52 h-10 rounded-2xl"
      />
      <button
        className="mx-3 bg-slate-800 text-white rounded-xl w-12 h-10 text-center"
        onClick={() => {
          setListitem([...listitem, value]);
        }}
      >
        Add
      </button>
    </div>
  );
}
