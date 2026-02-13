import { useState } from 'react'
import './App.css'
import Heeder from './projects/Heeder'
import { Outlet } from 'react-router-dom'
import Footer from './projects/Footer'

const App=()=>{
  const [count, setCount] = useState(0)
  return (
    <>
      <Heeder/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default App