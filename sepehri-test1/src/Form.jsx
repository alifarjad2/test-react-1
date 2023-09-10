import Button from "./Button";
import FarawinInput from "./FarawinInput";

export default function Form({msg, setMsg, list, setList}) {

  function handleMessage(event) {
    let msg = event.target.value;
    setMsg(msg);
  }

  const sendToList = () => {
    msg && setList([ ...list, msg]);
  }

  return (
    <div className="w-80 bg-red-400 p-8 m-auto mt-5 rounded-md">
      <FarawinInput type="text" onInput={handleMessage} />
      <Button onClick={sendToList} />
    </div>
  );
}
