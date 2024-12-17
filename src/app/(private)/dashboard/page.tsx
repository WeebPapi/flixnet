"use client"
import React from 'react'
import MovieRows from '@/components/MovieRows'
import HeroComponent from '@/components/HeroComponent'
import { HoverContext, HoverProvider } from '@/utils/hoverContext'

export default function DashboardPage() {

  return (
    <HoverProvider>
    <div className='w-full min-h-screen relative'>
        <HeroComponent/>
        <MovieRows/>
    </div>
    </HoverProvider>

  )
}
