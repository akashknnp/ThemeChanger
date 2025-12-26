import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Components/Example'
import Form from './Components/Form'
import Form2 from './Components/Form2'
import List from './Components/ToDoList/List'
import Toggle from './Components/Toggle'
import Userapi from './Components/Api/Userapi'
import Translate from './Components/Modetranslater/Translate'
import Navigation from './Components/Modetranslater/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Example/> */}
      {/* <Form /> */}
      {/* <Form2 /> */}
      <List />
      {/* <Userapi /> */}
      {/* <Toggle /> */}
      {/* <Translate /> */}
      {/* <Navigation /> */}
    </>
  )
}

export default App
