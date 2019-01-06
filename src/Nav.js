import React from 'react';
import { Link } from 'react-router-dom';

export function Nav () {
  return (
    <div className='nav'>
      <ul>
        <Link to="/hooks/useArray"><li>Copy&Paste</li></Link>
        <Link to="/libraries"><li>Libraries</li></Link>
      </ul>
    </div>
  )
}