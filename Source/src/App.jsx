import { useState } from "react";
import Form from "./Form";
import List from "./List";

//1- just add components and run
//2- complete From component
//3- complete static list
//4- now we need to add state for manage it (here is main topic!)
//    first we must add list not form cause form will need in form too!
//    thats mean first we need list state that will use in form. ok lets create list state
//    we cant add list state in List cause its need in form then we must move it to nearest parent mean App
//5- next we add form states (input and handle setList)
export default function App() {
  //return div cause it can get class for style and responsive and ...
  //u can replace with react fragment too but div is better

  //we cant add list state in List cause its need in form then
  //we must move it to nearest parent mean App
  const [list, setList] = useState([]); //state for item list that show in list

  return (
    <div>
      <Form setList={setList} />
      <List list={list} />
    </div>
  );
}
