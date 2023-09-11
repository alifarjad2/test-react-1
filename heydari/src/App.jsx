import Form from "./Form.jsx";
import List from "./List.jsx";
import { createContext ,useState} from 'react';

export const ThemeContext = createContext({text:""});

export default function App() {
  const [text, setText] = useState({text:""});

  return (
    <ThemeContext.Provider value={[text, setText]}>
      <Form/>
      <List/>
    </ThemeContext.Provider>
  );
}
