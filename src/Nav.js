import React from 'react';
import { Link } from 'react-router-dom';

export function Nav () {
  return (
    <div className='nav'>
      <ul>
        <Link to="/hooks"><li>Copy and Paste</li></Link>
        <Link to="/libraries"><li>Libraries</li></Link>
      </ul>
    </div>
  )
}