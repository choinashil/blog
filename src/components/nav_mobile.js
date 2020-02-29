import React, { useState } from 'react'
import { Link } from 'gatsby'
import '../styles/index.scss'

const Nav = () => {
  const [isNavHidden, toggleNav] = useState(true);
  
  return (
    <nav className='nav-mobile'>
      <ul className='nav-mobile__category'>
        <li className='nav-mobile__list'>
          <Link to='/me' className='link'>me</Link>
        </li>
        <li className='nav-mobile__list'>
          <Link to='/note' className='link'>note</Link>
        </li>
        <li className='nav-mobile__list'>
          <Link to='/programming' className='link'>programming</Link>
        </li>
        <li className='nav-mobile__list'>
          <Link to='/activity' className='link'>activity</Link>
        </li>
        <li className='nav-mobile__list'>
          <a href='https://www.notion.so/45ac5afb2c184559b3e2ba81854f420c?v=045a5d0f1cd54e709e25aca9f64d7b86' target='_blank' rel='noopener noreferrer' className='link'>devlog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
