"use client"
import NavBar from '@/components/NavBar'
import { ILayout } from '@/interfaces/layout.interface'
import React from 'react'
import { auth } from '@/firebase'
import VerifyReminder from '@/components/VerifyReminder'
import { onAuthStateChanged } from 'firebase/auth'



const PrivateLayout:React.FC<ILayout> = ({children}) => {
  const [user, setUser] = React.useState(auth.currentUser)
  onAuthStateChanged(auth, (user) => {
    if(user)
    setUser(user)
  })
  return (
    <div className='w-full min-h-screen relative flex flex-col justify-center items-center'>
        <NavBar/>
        {auth.currentUser?.emailVerified === false && <VerifyReminder/>}
        {children}
    </div>
  )
}

export default PrivateLayout