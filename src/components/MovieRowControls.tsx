"use client"
import React, { useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

interface MovieRowControlsProps {
    emblaApi?: EmblaCarouselType
}

const MovieRowControls:React.FC<MovieRowControlsProps> = ({emblaApi}) => {
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
  return (
    <div className='w-full h-full absolute top-[44px] pointer-events-none'>
        <button type='button' className='h-[155px] absolute left-0 z-10 hover:bg-[rgba(0,0,0,0.75)] transition-all duration-200 ease-in-out flex items-center justify-center pointer-events-auto' onClick={scrollPrev}><FaChevronLeft size={24}/></button>
        <button type='button' className='h-[155px]  absolute right-0 z-10 hover:bg-[rgba(0,0,0,0.75)] transition-all duration-200 ease-in-out flex items-center justify-center pointer-events-auto' onClick={scrollNext}><FaChevronRight size={24}/></button>
    </div>
  )
}

export default MovieRowControls