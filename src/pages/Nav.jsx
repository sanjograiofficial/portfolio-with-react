import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='container'>
      <nav className='navbar'>
        <ul>
          <li><NavLink className={(e)=>{return e.isActive?"red":""}} to={'/'}>Home</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red":""}} to={'/about'}>About</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red":""}} to={'/education'}>Education</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red":""}} to={'/projects'}>Projects</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red":""}} to={'/contact'}>Contact</NavLink></li>
        </ul>
      </nav>
        <Outlet />
    </div>
  )
}

export default Nav
