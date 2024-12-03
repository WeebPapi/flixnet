import React from 'react'
import Image from 'next/image'
import NavLinks from './NavLinks'
import { navLinkData } from '@/data/navLinkData'

const NavBar = () => {
  return (
    <nav>
        <Image src="/assets/flixnet-logo.png" alt="flixnet logo" width={100} height={100}/>
        <NavLinks  links={navLinkData}/>
    </nav>
  )
}

export default NavBar