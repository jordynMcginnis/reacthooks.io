import React from 'react';

export function Libraries () {
  return (
    <div className='libraries'>
      <h1>LIBRARIES</h1>
      <ul>
        <a href='https://reactjs.org/docs/hooks-intro.html'>
          <li>
            <span className='l-title'>Built-In</span>
            <span></span>
          </li>
        </a>
        <a href='https://github.com/diegohaz/constate'>
          <li>
            <span className='l-title'>Constate</span>
            <span>Scalable state manager using React Hooks & Context</span>
          </li>
        </a>
        <a href='https://github.com/kitze/react-hanger'>
          <li>
            <span className='l-title'>React-Hanger</span>
            <span>A small collection of useful hooks for React 16.7</span>
          </li>
        </a>
        <a href='https://github.com/kalcifer/react-powerhooks'>
          <li>
            <span className='l-title'>React-Powerhooks</span>
            <span>Hooks api for react-powerplug components</span>
          </li>
        </a>
        <a href='https://github.com/streamich/react-use'>
          <li>
            <span className='l-title'>React-Use</span>
            <span>Collection of essential React Hooks</span>
          </li>
        </a>
        <a href='https://github.com/rehooks'>
          <li>
            <span className='l-title'>Rehooks</span>
            <span>React Hooks for Everything</span>
          </li>
        </a>
        <a href='https://github.com/palmerhq/the-platform/'>
          <li>
            <span className='l-title'>The-Platform</span>
            <span>Web. Components.</span>
          </li>
        </a>
      </ul>
    </div>
  )
}