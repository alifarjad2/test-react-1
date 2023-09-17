import { useEffect, useState } from "react";
import { Form } from "./Form";
import { List } from "./List";

export default function App() {
  const [listAsli, setListAsli] = useState([]);
  console.log("List ASLI 2 = ", listAsli);

  return (
    <div className="flex flex-col bg-slate-400  min-h-screen border border-black p-10">
      {/* اینجا من فک میکردم چون میخواهیم مقدار قبلی استیت رو داشته باشیم و اضافه کنیم باید بغیر فانکشن برای تغییر استیت متغییر محلی رو هم پاس بدیم ک دیدم شما فقط از فانکشن استفاده کردین و با ارو فانکشن مقدار جدید رو اضافه کردین ب استیت  */}
        <Form listAsli={listAsli} setListAsli={setListAsli} />
      
      {/* اینجا هم مطابق سورس کده ک نمره کامل میدم ب خودم :D  */}
        <List listAsli={listAsli} setListAsli={setListAsli} />
      
    </div>
  );
}


//    Arzyabi khodamo az 20 midam  ~ 18.01 ~ :)