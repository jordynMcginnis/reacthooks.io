import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <NavLink activeClassName='active-link' to="/hooks/useArray"><li>Hooks</li></NavLink>
        <NavLink exact activeClassName='active-link' to='/tutorials'><li>Tutorials</li></NavLink>
        <NavLink activeClassName='active-link' to="/libraries"><li>Libraries</li></NavLink>
      </ul>
    </nav>
  )
}