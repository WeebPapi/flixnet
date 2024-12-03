import NavBar from '@/components/NavBar'
import { ILayout } from '@/interfaces/layout.interface'
import React from 'react'

const PrivateLayout:React.FC<ILayout> = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default PrivateLayout