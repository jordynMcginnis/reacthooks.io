import React from 'react';

const tuts = [{
    name: 'Introducing Hooks',
    href: 'https://reactjs.org/docs/hooks-intro.html',
    description: 'The official introduction to Hooks on the React blog.',
  }, {
    name: 'React Conf 2018',
    href: 'https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=youtu.be',
    description: 'At React Conf 2018, Sophie Alpert and Dan Abramov introduced Hooks, followed by Ryan Florence demonstrating how to refactor an application to use them.',
  }, {
    name: 'Making Sense of React Hooks',
    href: 'https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889',
    description: 'Article written by Dan Abramov about making sense of React Hooks.',
  }, {
    name: 'From React.Component to Hooks',
    href: 'https://medium.com/@dispix/from-react-component-to-hooks-b50241334365',
    description: 'This article will help you have a better understanding of React Hooks and how you can take advantage of them.',
  }, {
    name: 'Hooks by Example',
    href: 'https://github.com/latviancoder/hooks-by-example',
    description: 'Collection of beginner-friendly real world examples of hook usage.',
  }, {
    name: 'Hook me up: Intro to React Hooks',
    href: 'https://blog.usejournal.com/react-hooks-death-of-classes-and-lifecycles-c8db5956558c',
    description: 'Beginner friendly introduction to React Hooks.'
  }, {
    name: 'Getting Started with React Hooks',
    href: 'https://scotch.io/tutorials/getting-started-with-react-hooks',
    description: 'An introduction to getting started with React Hooks.'
  }, {
    name: 'Simple Code Reuse with React Hooks',
    href: 'https://blog.bitsrc.io/simple-code-reuse-with-react-hooks-432f390696bf',
    description: 'Code reuse is very necessary for scaling. We’ll be looking at what React hooks are and how we can use them to keep our components D.R.Y.'
  }, {
    name: 'React Hooks Podcast',
    href: 'https://syntax.fm/show/092/react-hooks',
    description: 'In this podcast Wes Bos and Scott Tolinski discuss React Hooks - what they are, why you might want to use them, their differences with regular classes, and more.',
  }, {
    name: 'Why Do React Hooks Rely on Call Order?',
    href: 'https://overreacted.io/why-do-hooks-rely-on-call-order/',
    description: 'Understand the rationale for the most controversial aspect of Hooks proposal.'
  }, {
    name: 'How to Use Basic React Hooks for State and Effects',
    href: 'https://www.telerik.com/blogs/how-to-use-basic-react-hooks-for-state-and-effects',
    description: 'How to Use Basic React Hooks for State and Effects.'
  }, {
    name: 'React Hooks: What’s going to happen to render props?',
    href: 'https://blog.kentcdodds.com/react-hooks-whats-going-to-happen-to-render-props-8ade1f00f159',
    description: 'What to do with all these render props components now that react hooks solve the code reuse problem better than render props ever did.'
  }, {
    name: 'React Hooks: What’s going to happen to my tests?',
    href: 'https://blog.kentcdodds.com/react-hooks-whats-going-to-happen-to-my-tests-df4c2b4d67b7',
    description: 'How you can prepare your tests for React’s new Hooks feature.',
  }
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