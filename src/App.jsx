import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  const body = document.querySelector("body");
    body.style.background = color

  return (
    <>
      <div className="bg-slate-50 rounded-xl flex justify-center items-center ">
        <button className='bg-[pink] w-14 h-8 m-5 rounded-sm ' onClick={()=>setColor("pink")}>Pink</button>
        <button className='bg-[yellow] w-14 h-8 m-5 rounded-sm' onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='bg-[orange] w-14 h-8 m-5 rounded-sm' onClick={()=>setColor("orange")}>Orange</button>
        <button className='bg-[red] w-14 h-8 m-5 rounded-sm' onClick={() => setColor("red")}>Red</button>
        <button className='bg-[green] w-14 h-8 m-5 rounded-sm' onClick={()=>setColor("green")}>Green</button>
      </div>
    </>
  )
}

export default App
