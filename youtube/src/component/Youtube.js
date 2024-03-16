import React from 'react'
import { Link } from 'react-router-dom'

export default function Youtube() {
  return (
    <div>
      <Link button className='btn btn-primary'to={'/english'}>English song</Link>
      <Link button className='btn btn-primary' to={'/marathi'}>Marathi song</Link>
      <Link button className='btn btn-primary' to={'/hindi'}>Hindi song</Link>
      <Link button className='btn btn-primary' to={'/god'}>God song</Link>
      
    </div>
  )
}
