'use client'
import Image from 'next/image'
import React from 'react'
import ProfDropdown from './ProfDropdown'
import { AnimatePresence } from 'motion/react'

interface ProfileLinkProps {
    profilePic: string | null
}


const ProfileLink:React.FC<ProfileLinkProps> = ({profilePic}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='relative' onClick={() => setIsOpen(prev => !prev)}>
    <Image src={profilePic? profilePic : '' } alt="profile icon" width={32} height={32} className='cursor-pointer'/>
    {isOpen &&<AnimatePresence mode='wait'><ProfDropdown key="profDropdown"/></AnimatePresence>}
    </div>
  )
}

export default ProfileLink