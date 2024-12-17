'use client'

import React from 'react'
import Image from 'next/image'
import NavLinks from './NavLinks'
import { navLinkData } from '@/data/navLinkData'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import ProfileLink from './ProfileLink';
import defaultProfilePic from '@/../public/assets/profileIcons/profIcon1.png'

const NavBar = () => {
  const [user, setUser] = React.useState(auth.currentUser)
  const [profilePic, setProfilePic] = React.useState(defaultProfilePic.src)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        setProfilePic(user.photoURL ?? defaultProfilePic.src)
      } else {
        setProfilePic(defaultProfilePic.src)
      }
    })

    return () => unsubscribe()
  }, [user])

  return (
    <nav className='flex items-center justify-between  text-white absolute top-0 left-0 right-0 z-50' >
      <div className='flex items-center space-x-4 px-12 py-4'>
        <Image src="/assets/flixnet-logo.png" alt="flixnet logo" width={100} height={100}/>
        <NavLinks  links={navLinkData}/>
      </div>
      <div className='flex items-center space-x-4 px-12 py-4'>
        <button type='button'><CiSearch size={36} fill='white'/></button>
        <button type='button'><IoMdNotificationsOutline size={36} fill='white'/></button>
        <ProfileLink profilePic={profilePic as string} />
      </div>
      
    </nav>
  )
}

export default NavBar