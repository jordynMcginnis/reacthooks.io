import React from 'react';
import { Link } from 'react-router-dom';
import { hookNames } from './hooks/index.js';

export function SideBar () {
  return (
    <ul>
      {hookNames.map((hook)=>{
        return (
          <li key={hook}>
            <Link to={`/${hook}`}>{hook}</Link>
          </li>
        )
      })}
    </ul>
  );
}