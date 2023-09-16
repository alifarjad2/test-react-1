import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form.jsx'
import List from './Components/List'

// Main function For APP.JSX

function App() {
  // A state for saving and passing User input Values
  const [textInput , setTextInput]=useState([])

  // const [count, setCount] = useState(0)
  console.log(textInput)
  return (

    <div className='flex flex-col'>

    <div>
      <Form text={setTextInput} />
    </div>
    <div>
      <List textListing={textInput} setTextListing={setTextInput}/>
    </div>


    </div>
  )
}

export default App
