import React from 'react'

interface LayoutDivProps {
children: React.ReactNode
classname?: string
style?: React.CSSProperties
}

const LayoutDiv:React.FC<LayoutDivProps> = ({children, classname = '', style}) => {
  return (
    <div className={`w-full min-h-screen ${classname}`} style={style}>{children}</div>
  )
}

export default LayoutDiv