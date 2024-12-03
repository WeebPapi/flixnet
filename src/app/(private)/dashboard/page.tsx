import React from 'react'
import { fetchMovies } from '@/api/fetchMovies'
import MovieCard from '@/components/MovieCard'
import MovieRow from '@/components/MovieRow'

export default async function DashboardPage() {
  const movies = await fetchMovies()
  return (
    <div className='flex flex-col justify-start items-center'>
        <MovieRow movies={movies} label={'Trending Now'} />
    </div>
  )
}
