import React from 'react'
import './header.css'
import Cta from './cta'
import headimg from '../../assets/photo1.jpeg';

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Sam Gomez</h1>
            <h5 className='text-light'> Front End Developer</h5>
            <Cta />
            <div className="img-ic">
              <img src={headimg} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header;