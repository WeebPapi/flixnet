import React from 'react'
import { IMovie } from '@/interfaces/tmdbMovies.interface'
import MovieCard from './MovieCard'
import MovieRowControls from './MovieRowControls'

interface MovieRowProps {
    movies: IMovie[]
    label: string
}

const MovieRow:React.FC<MovieRowProps> = ({movies, label}) => {
  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold px-4">{label}</p>
      <MovieRowControls>
        <div 
          id="movie-row-container"
          className="flex items-center space-x-4 overflow-x-hidden scroll-smooth"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[200px]">
              <MovieCard 
                movieId={movie.id} 
                title={movie.title} 
                backdrop_path={movie.backdrop_path} 
              />
            </div>
          ))}
        </div>
      </MovieRowControls>
    </div>
  )
}

export default MovieRow