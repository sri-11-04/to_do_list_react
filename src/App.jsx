import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoMain from './to_do_main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <ToDoMain/>
    </div>
  )
}

export default App
