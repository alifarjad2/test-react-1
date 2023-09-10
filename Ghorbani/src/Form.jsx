import FarawinInout from "./FarawinInput";

export default function Form({ setValue, setListitem, listitem, value }) {
  return (
    <div className="m-auto">
      <FarawinInout
        setValue={setValue}
        setListitem={setListitem}
        listitem={listitem}
        value={value}
      />
    </div>
  );
}
