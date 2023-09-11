export default function Button({ inpValue, nameList, setNameList , validation , setVL , setFirstUse}) {
  
  return (
    <button
      className="active:bg-white active:text-black border border-black p-4 rounded-xl"
      onClick={() => {
        if(validation) {
            setNameList([...nameList, inpValue]);
            setVL("");
            setFirstUse(true);
        }
      }}
    >
      {" "}
      Click{" "}
    </button>
  );
}
