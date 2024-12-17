import React from 'react'
import { auth } from '@/firebase'
import { sendEmailVerification, User } from 'firebase/auth'
const VerifyReminder = () => {
  return (
    <div className='w-full h-16 bg-red-800 absolute top-16 flex justify-between items-center'>
        <p className='px-4'>Make sure to verify your email</p>
        <p className='cursor-pointer underline px-4' onClick={() => sendEmailVerification(auth.currentUser as User)}>Resend verification email</p>
    </div>
  )
}

export default VerifyReminder