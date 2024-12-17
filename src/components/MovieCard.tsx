"use client"
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HoverContext } from '@/utils/hoverContext'
import { fetchMovie } from '@/api/fetchMovie'

const BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL

interface MovieCardProps {
    movieId: number
    title: string
    backdrop_path: string
    className?: string
    release_date: string
}

const MovieCard: React.FC<MovieCardProps> = ({
    movieId,
    title,
    backdrop_path = '',
    className = '',
    release_date = ''
}) => {
    const [isNew, setIsNew] = React.useState(false)
    const { movie: hoveredMovie, setHoveredMovie } = useContext(HoverContext)
    const [isHovered, setIsHovered] = React.useState(false)

    // Check if movie is new
    useEffect(() => {
        const date = new Date(release_date)
        const today = new Date()
        setIsNew(((today.getTime() - date.getTime())/(1000*60*60*24)) <= 30)
    }, [release_date])

    // Handle hover effects
    useEffect(() => {
        const handleHover = async () => {
            if (isHovered) {
                const movie = await fetchMovie(movieId.toString())
                setHoveredMovie(movie)
            } else {
                setHoveredMovie(null)
            }
        }

        handleHover()
    }, [isHovered, movieId, setHoveredMovie])

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            className={`embla__slide min-w-[220px] h-[155px] cursor-pointer hover:border-2 hover:border-white z-10 ${className}`}
        >
            <Link 
                href={`/movies/${movieId}`} 
                className="w-full h-full flex justify-center items-center relative"
            >
                <Image 
                    src={`${BASE_URL}${backdrop_path}`} 
                    width={320} 
                    height={230} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
                {isNew && (
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#F50723] text-white px-2 py-1 text-sm rounded-t-[2px]'>
                        Recently Added
                    </div>
                )}
            </Link>
        </div>
    )
}

export default MovieCard