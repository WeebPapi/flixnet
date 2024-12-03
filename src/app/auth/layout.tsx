import React from 'react'
import { ILayout } from '@/interfaces/layout.interface';
import LayoutDiv from '@/components/LayoutDiv';

export default function AuthLayout({children}: ILayout) {
  return (
    <LayoutDiv>{children}</LayoutDiv>
  )
}
