import { useState } from 'react'
import './App.css'
import Heeder from './projects/Heeder'
import { Outlet } from 'react-router-dom'

const App=()=>{
  const [count, setCount] = useState(0)
  return (
    <>
      <Heeder/>
      <Outlet/>
    </>
  )
}
export default App