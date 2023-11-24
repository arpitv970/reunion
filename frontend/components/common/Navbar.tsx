import React from 'react'
import { Button } from '../ui/button'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='nav-logo'>Reunion</span>
      <span className='nav-actions'>
        <ModeToggle />
        <Button variant='outline'>Publish</Button>
        <Button>Login</Button>
      </span>
    </nav>
  )
}

export default Navbar
