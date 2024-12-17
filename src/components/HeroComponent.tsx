"use client"
import React from 'react'
import { fetchMovies } from '@/api/fetchMovies'
import Image from 'next/image'
import { IMovie } from '@/interfaces/tmdbMovies.interface'
import { FaPlay } from 'react-icons/fa'
import { CiCircleInfo } from 'react-icons/ci'
import { HoverContext } from '@/utils/hoverContext'

const HeroComponent = () => {
  const [movies, setMovies] = React.useState<IMovie[]>([])
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)
  const { movie: hoveredMovie } = React.useContext(HoverContext)

  // Determine which movie to display
  const displayedMovie = React.useMemo(() => {
    return hoveredMovie || movies[currentIndex] || null
  }, [hoveredMovie, movies, currentIndex])

  // Handle cycling to next movie
  const handleNext = React.useCallback(() => {
    if (!hoveredMovie) {
      setCurrentIndex((prevIndex) => 
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      )
    }
  }, [movies.length, hoveredMovie])

  // Fetch initial movies
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchMovies(1)
        setMovies(data)
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  // Set up auto-cycling interval
  React.useEffect(() => {
    if (movies.length === 0) return 

    const interval = setInterval(handleNext, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [handleNext, movies.length])

  if (isLoading || !movies.length) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <div className='text-white text-2xl'>Loading...</div>
      </div>
    )
  }

  return (
    <div className='w-full h-screen relative'>
      {displayedMovie && (
        <>
          <Image
            key={displayedMovie.backdrop_path} // Force remount on image change
            src={`https://image.tmdb.org/t/p/original${displayedMovie.backdrop_path}`}
            alt={displayedMovie.title}
            fill
            priority
            className='w-full h-full object-cover mask-feather transition-opacity duration-500'
          />
          
          
          <div className='absolute top-[60%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]'>
            <h1 className='text-[4rem] font-bold text-white z-10 w-full leading-[4.5rem]'>
              {displayedMovie.title}
            </h1>
            
            
            <p className='text-white/90 z-10 w-full leading-[1.5rem] py-8 '>
              {displayedMovie.overview}
            </p>
            
            <div className='flex gap-4'>
              <button className='bg-white hover:bg-white/90 text-black px-6 py-2 rounded-md 
                               min-w-[120px] flex items-center justify-center font-semibold 
                               text-[1.1rem] transition-colors'>
                <FaPlay size={24} className='mr-4'/>
                Play
              </button>
              
              <button className='bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.8)] 
                               text-white px-6 py-2 rounded-md min-w-[120px] flex items-center 
                               justify-center font-semibold text-[1.1rem] transition-colors'>
                <CiCircleInfo fill='white' size={30} className='mr-4'/>
                More Info
              </button>
            </div>
          </div>
          
          {/* Optional: Age Rating or Additional Info */}
          {displayedMovie.adult && (
            <div className='absolute bottom-4 left-4 bg-red-600 text-white px-2 py-1 rounded'>
              18+
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default HeroComponent