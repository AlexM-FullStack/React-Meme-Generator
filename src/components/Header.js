import React from 'react'
import trollface from '../images/trollface.png'

export default function Header() {
    return (
      <header className='header'>
        <div className='logo'>
          <img src={trollface} className='header--image'/>
          <h2 className='header--title'>Meme Generator</h2>
        </div>

        <h4 className='header--project'>React Project</h4>
      </header>
    )
  }