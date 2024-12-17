"use client"
import React from 'react'
import { FaPencilAlt } from "react-icons/fa";

interface ProfileInputProps {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInput:React.FC<ProfileInputProps> = ({name, label, type, value, onChange}) => {
    const [editing, setEditing] = React.useState(false)
  return (
    <div className='w-[35%] my-4'>
        <label className='text-[12px]' htmlFor={name}>{label}</label>
        <div className='flex items-center space-x-2'>
       {editing? <input type={type} name={name} id={name} onChange={onChange} placeholder={label} className='bg-[#171717] text-white w-full border-none outline-none focus:outline-none placeholder:text-lightgray p-2'/> : <p className='w-full p-2'>{value}</p>}
        <FaPencilAlt onClick={() => setEditing(prev => !prev)} fill='lightgray'/>
        </div>
    </div>
  )
}

export default ProfileInput