import React from 'react';
import { Link } from 'react-router-dom';

export function SideBar () {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/useEffect">UseEffect</Link>
      </li>
      <li>
        <Link to="/useReducer">UseReducer</Link>
      </li>
      <li>
        <Link to="/useRef">UseRef</Link>
      </li>
      <li>
        <Link to="/useState">UseState</Link>
      </li>
    </ul>
  );
}
