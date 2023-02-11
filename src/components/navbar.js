import React, { Component } from 'react'
import './navbar.css'
import image from './N.png'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar'>
            <Link className='logo' to='/'><img src={image} alt='logo' className='NB'/></Link>
            <ul className='list'>
                <li className='Home'>
                    <Link to='/home'className='Home'>Home</Link>
                </li>
                <li className='About'>
                    <Link to='/about'className='About'>About</Link>
                </li>
                <li className='ContactUs'>
                    <Link to='/contactus'className='ContactUs'>Contact Us</Link>
                </li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;