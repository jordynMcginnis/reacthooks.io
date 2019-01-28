import React from 'react';

const tuts = [{
    name: 'Todo 1',
    href: 'https://google.com',
    description: 'description',
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