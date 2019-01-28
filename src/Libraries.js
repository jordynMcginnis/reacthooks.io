import React from 'react';

const libs = [{
    name: 'Built-In',
    href: 'https://reactjs.org/docs/hooks-intro.html',
    description: 'Out of the box Hooks with React'
  }, {
    name: 'Constate',
    href: 'https://github.com/diegohaz/constate',
    description: 'Scalable state manager using React Hooks & Context'
  }, {
    name: 'React-Hanger',
    href: 'https://github.com/kitze/react-hanger',
    description: 'A small collection of useful hooks for React 16.7'
  },{
    name: 'React-Powerhooks',
    href: 'https://github.com/kalcifer/react-powerhooks',
    description: 'Hooks api for react-powerplug components'
  },{
    name: 'React-Use',
    href: 'https://github.com/streamich/react-use',
    description: 'Collection of essential React Hooks'
  },{
    name: 'Rehooks',
    href: 'https://github.com/rehooks',
    description: 'React Hooks for Everything'
  }, {
    name: 'The-Platform',
    href: 'https://github.com/palmerhq/the-platform/',
    description: 'Web. Components.'
  }
]

export default function Libraries () {
  return (
    <ul className='libraries'>
      {libs.map(({ name, href, description }) => (
        <li key={name}>
          <h3><a href={href}>{name}</a></h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  )
}