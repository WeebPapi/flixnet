import React from 'react'
import ProfileEditForm from './ProfileEditForm'

const ProfilePanel:React.FC = () => {
  return (
    <div className='w-full h-max max-w-[980px] bg-black flex justify-center items-start'>
        <ProfileEditForm/>
    </div>
  )
}

export default ProfilePanel