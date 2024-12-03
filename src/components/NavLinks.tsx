import React from 'react'
import { INavLink } from '@/interfaces/navlink.interface'
import Link from 'next/link'

const NavLinks:React.FC<{links: INavLink[]}> = ({links}) => {
  return (
    <ul className='flex items-center space-x-4 list-none'>
        {links.map((link) => ( <li key={link.name}><Link href={link.path} className={`${link.classname}`}>{link.name}</Link></li> ))}
    </ul>
  )
}

export default NavLinks