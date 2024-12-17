'use client'
import React from 'react'
import { fetchMovies } from '@/api/fetchMovies'
import { IMovie } from '@/interfaces/tmdbMovies.interface'
import MovieRow from './MovieRow'

const MovieRows = () => {
    const [trendingMovies, setTrendingMovies] = React.useState<IMovie[]>([])
    const [comedyMovies, setComedyMovies] = React.useState<IMovie[]>([])
    const [dramaMovies, setDramaMovies] = React.useState<IMovie[]>([])
    const [romanceMovies, setRomanceMovies] = React.useState<IMovie[]>([])
    const [actionMovies, setActionMovies] = React.useState<IMovie[]>([])
    const [horrorMovies, setHorrorMovies] = React.useState<IMovie[]>([])
    const [documentaryMovies, setDocumentaryMovies] = React.useState<IMovie[]>([])
    React.useEffect(() => {
      const fetch = async () => {
        const trendingData = await fetchMovies(1)
        setTrendingMovies(trendingData)
        const actionData = await fetchMovies(1,['12'])
        setActionMovies(actionData)
        const horrorData = await fetchMovies(1, ['27'])
        setHorrorMovies(horrorData)
        const documentaryData = await fetchMovies(1, ['99'])
        setDocumentaryMovies(documentaryData)
        const comedyData = await fetchMovies(1, ['35'])
        setComedyMovies(comedyData)
        const dramaData = await fetchMovies(1, ['18'])
        setDramaMovies(dramaData)
        const romanceData = await fetchMovies(1, ['10749'])
        setRomanceMovies(romanceData)
      }
      fetch()
    }, [])
  return (
    <div className='flex flex-col justify-center items-center w-full h-full absolute top-[140vh]'>
    <MovieRow movies={trendingMovies} label={'Trending Now'} />
    <MovieRow movies={actionMovies} label={'Action'} />
    <MovieRow movies={horrorMovies} label={'Horror'} />
    <MovieRow movies={documentaryMovies} label={'Documentary'} />
    <MovieRow movies={comedyMovies} label={'Comedy'} />
    <MovieRow movies={dramaMovies} label={'Drama'} />
    <MovieRow movies={romanceMovies} label={'Romance'} />
</div>
  )
}

export default MovieRows