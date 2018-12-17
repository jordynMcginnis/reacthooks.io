import React from 'react';
import { Link } from 'react-router-dom';
import { hookNames } from './hooks/index.js';

export function SideBar () {
  return (
    <div className='sideBar'>
    <h2 className='title'><span className='r-title'>react</span>Hooks.io</h2>
      <ul>
        {hookNames.map((hook)=>{
          return (
            <li key={hook}>
              <Link to={`/${hook}`}>{hook}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}