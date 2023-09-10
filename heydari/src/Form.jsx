import { useState, useContext } from "react";
import { ThemeContext } from "./App";


export default function Form() {
    const [text, setText] = useContext(ThemeContext);
    const [value, setValue] = useState("");
    const handelsetValue = (e) => { setValue(e.target.value) };
    console.log(value);
    console.log(text);
    return (
        <>
            <FarawinInput label={'text'} type={'text'} placeholder={'Type your text'} value={value} handelsetValue={handelsetValue} />
            <Button value={value}/>
        </>
    );
}

//تولید اینپوت
function FarawinInput({ label, type, placeholder, value, handelsetValue }) {
    return (
        <div className="mt-2">
            <label className="text-xs ml-2 text-gray-900"
                htmlFor={label}>متن خود را وارد کنید</label>
            <div className="flex items-center border-b">
                <input className="flex-1 p-2 text-sm outline-none text-zinc"
                    id={label}
                    type={type}
                    placeholder={placeholder}
                    onChange={handelsetValue}
                    value={value}
                />
            </div>
        </div>
    )
}

function Button({value}) {
    const [text, setText] = useContext(ThemeContext);
    return (
        <button className="mx-2 w-full text-center text-xs" 
        onClick={() => {
            setText({
                ...text,
                text: value,
            });
        }}>
            ثبت متن
        </button>
    )
}