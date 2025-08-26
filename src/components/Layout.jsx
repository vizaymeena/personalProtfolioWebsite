import React from 'react'
import '../assets/styles/layout.css'
function Layout() {
  return (
    <>
    <nav>
        <ul>
            <li className='list'>
              <span className='links'>Home</span>
              <span className='links'>About</span>
              <span className='links'>Services</span>
              <span className='links'>Login</span>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Layout