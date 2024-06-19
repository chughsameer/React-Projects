import React, { useEffect, useState } from 'react'
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Front from './components/Front/Front';

const App = () => {
  let frontData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give into",text2:"your passions"}
  ]
  const[frontCount,setFrontCount] = useState(0);
  const[playStatus,setPlayStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setFrontCount((count)=>{return count===2? 0 : count+1})
    }, 3000);
  }, [])  

  return (
    <div>
      <Background playStatus={playStatus} frontCount={frontCount}/>
      <Navbar/>
      <Front setPlayStatus={setPlayStatus} playStatus={playStatus} frontCount={frontCount} setFrontCount={setFrontCount} frontData={frontData[frontCount]}/>
    </div>
  )
}

export default App
