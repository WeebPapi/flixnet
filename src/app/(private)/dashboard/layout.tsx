import LayoutDiv from '@/components/LayoutDiv';
import { ILayout } from '@/interfaces/layout.interface';
import React from 'react'

export default function DashboardLayout({
    children,
  }: ILayout) {
  return (
    <LayoutDiv classname='flex flex-col justify-start items-center'>{children}</LayoutDiv>
  )
}
