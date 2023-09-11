import { ThemeContext } from "./App";
import { useState, useContext ,useEffect} from "react";

export default function List() {
    const [text] = useContext(ThemeContext);
    const [listMassege, setListMassege] = useState([]);
    setListMassege(oldArray => [...oldArray, text]);
    return (
        <div>
            {listMassege.map((text, indext) => {
                return (
                    <div key={indext} >
                        <p>{text.text}</p>
                    </div>
                );
            })}
        </div >
    );
}