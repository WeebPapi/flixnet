'use client'
import React from 'react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

const ProfDropdown = () => {
  const variants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1 },
  }
  const router = useRouter()
  const handleSignOut = () => {
    document.cookie = "token="
    router.push('/auth');
  };
  return (

    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className='w-[200px] h-[200px] bg-black absolute top-12 right-[-150%] origin-top flex flex-col'>
      <button className='px-6 py-2 hover:bg-[#171717] text-left' onClick={() => router.push('/profile')}>Profile</button>
      <button className='px-6 py-2 hover:bg-[#171717] text-left' onClick={handleSignOut}>Sign Out</button>
    </motion.div>

  )
}

export default ProfDropdown