import React from 'react'
import './Video.css'
import Playvideo from '../../Components/PlayVideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'


export default function Video() {
  return (
    <div className='play-container'>
      <Playvideo/>
      <Recommended/>
      
    </div>
  )
}
