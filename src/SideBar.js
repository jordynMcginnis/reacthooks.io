import React from 'react';
import { Link } from 'react-router-dom';
import { hookNames } from './hooks/index.js';

export function SideBar () {
  return (
    <ul>
      {hookNames.map((hook)=>{
        let path = `/${hook}`;
        return (
          <li key={hook}>
            <Link to={path}>{hook}</Link>
          </li>
        )
      })}
    </ul>
  );
}