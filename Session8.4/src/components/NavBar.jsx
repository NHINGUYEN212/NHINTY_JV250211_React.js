import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul className='flex justify-center gap-5'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
