import React from 'react'
import './Front.css'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
import arrow_btn from '../../assets/arrow_btn.png'

const Front = ({setPlayStatus,playStatus,frontCount,setFrontCount,frontData}) => {
  return (
    <div className="front">
      <div className="front-text">
        <p>{frontData.text1}</p>
        <p>{frontData.text2}</p>
      </div>
      <div className="front-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="front-dot-play">
        <ul className='front-dots'>
          <li onClick={()=>setFrontCount(0)} className={frontCount===0?'front-dot orange':'front-dot'}></li>
          <li onClick={()=>setFrontCount(1)} className={frontCount===1?'front-dot orange':'front-dot'}></li>
          <li onClick={()=>setFrontCount(2)} className={frontCount===2?'front-dot orange':'front-dot'}></li>
        </ul>
        <div className="front-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  )
}

export default Front
