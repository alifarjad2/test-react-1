import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function App() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <Form msg={msg} setMsg={setMsg} list={list} setList={setList} />
      <List list={list} />
    </>
  );
}

// 1- کامنت گذاری نکردم
// 2- key را برای لیست فراموش کردم
// 3- استایل دهی نمایش پیام ها نامناسب است 
// 4- دکمه حذف هر پیام را قرار ندادم 
// 5- ریسپانسیو نکردم
