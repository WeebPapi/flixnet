"use client"
import React from 'react'
import { IMovie } from '@/interfaces/tmdbMovies.interface'
import MovieCard from './MovieCard'
import useEmblaCarousel from 'embla-carousel-react'
import MovieRowControls from './MovieRowControls'



interface MovieRowProps {
    movies: IMovie[]
    label: string
}

const MovieRow:React.FC<MovieRowProps> = ({movies, label}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({dragFree: true})
  return (

    <div className="embla relative w-[90%] my-8">
        <p className="text-lg font-semibold pb-4 pl-2">{label}</p>
      <div className="embla__viewport  " ref={emblaRef}>
        <div 
          id="movie-row-container"
          className="embla__container"
        >
          {movies.map((movie) => (
              <MovieCard
              key={movie.id} 
                movieId={movie.id} 
                title={movie.title} 
                backdrop_path={movie.backdrop_path} 
                release_date={movie.release_date}
              />
          ))}
        </div>
      </div>
      <MovieRowControls emblaApi={emblaApi}/>
   </div>

    
  )
}

export default MovieRow