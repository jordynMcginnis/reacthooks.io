import React from 'react';

const tuts = [{
    name: 'Introducing Hooks',
    href: 'https://reactjs.org/docs/hooks-intro.html',
    description: 'The official introduction to Hooks on the React blog.',
  }, {
    name: 'Todo 2',
    href: 'https://google.com',
    description: 'description',
  }, {
    name: 'Todo 3',
    href: 'https://google.com',
    description: 'description',
  },
]

export default function Tutorials () {
  return (
    <ul className='tutorials'>
      {tuts.map(({ name, href, description }) => (
        <li key={name}>
          <h3><a href={href}>{name}</a></h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  )
}