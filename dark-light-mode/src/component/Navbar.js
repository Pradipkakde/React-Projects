import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src="" alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='search'/>
        <img src="" alt=""/>
      </div>

      <img src="" alt="" className="toggle-icon"/>
    </div>
  )
}
