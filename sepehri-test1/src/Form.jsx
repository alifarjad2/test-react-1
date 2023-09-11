import Button from "./Button";
import FarawinInput from "./FarawinInput";

// استیت ها را در یک پراپ قرار میدادم و سپس دستراکشن می کردم
export default function Form({msg, setMsg, list, setList}) {

  function handleMessage(event) {
    let msg = event.target.value;
    setMsg(msg);
  }

  // پیغام در صورت خالی بودن لیست پیامها قرار نگرفته
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
