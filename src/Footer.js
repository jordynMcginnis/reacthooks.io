import React from 'react'
import TMLogo from './TMLogo'

export default function Footer () {
  return (
    <div className='footer'>
      <a href='https://tylermcginnis.com'>
        <TMLogo style={{margin: '0 auto', display: 'block'}} height='70'/>
      </a>
    </div>
  )
}