import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const BASE_URL = process.env.TMDB_IMAGE_BASE_URL

interface MovieCardProps {
    movieId: number;
    title: string;
    backdrop_path: string;
}

const MovieCard:React.FC<MovieCardProps> = ({movieId, title, backdrop_path = ''}) => {
  return (
    <div className={`w-[220px] h-[130px]`}>
        <Link href={`/movies/${movieId}`} className={`w-full h-full`}>
            <Image src={`${BASE_URL}${backdrop_path}`} width={220} height={130} alt={title} className={`w-full h-full object-cover `}/>
        </Link>
    </div>
  )
}

export default MovieCard