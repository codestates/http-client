import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav id='nav'>
      <div>
        <NavLink to='/mypage' className='nav-span'>My Page</NavLink>
        <NavLink exact to='/todo' className='nav-span'>To Do</NavLink>
        <NavLink to='/important' className='nav-span'>중요 일정</NavLink>
        <NavLink to='/completed' className='nav-span'>완료된 일정</NavLink>
      </div>
    </nav>
  )
}

export default Nav;