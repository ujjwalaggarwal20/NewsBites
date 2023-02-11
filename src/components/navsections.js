import React, { Component } from 'react'
import "./navsections.css"
import { Link } from 'react-router-dom'

export default class NavSections extends Component {
  render() {
    return (
      <div><nav className='navsection'>
      <ul className='listnav'>
          <li className='sections'>
            <Link to="/business" className='sectionLink'>
              Business
              </Link>
          </li>
          <li className='sections'>
          <Link to="/entertainment" className='sectionLink'>
              Entertainment
              </Link>
          </li>
          <li className='sections'>
          <Link to="/general" className='sectionLink'>
              General
              </Link>
          </li>
          <li className='sections'>
          <Link to="/health" className='sectionLink'>
            Health
            </Link>
          </li>
          <li className='sections'>
          <Link to="/science" className='sectionLink'>
            Science
            </Link>
          </li>
          <li className='sections'>
          <Link to="/sports" className='sectionLink'>
            Sports
            </Link>
          </li>
          <li className='sections'>
          <Link to="/technology" className='sectionLink'>
            Technology
            </Link>
          </li>
      </ul>
  </nav></div>
    )
  }
}
