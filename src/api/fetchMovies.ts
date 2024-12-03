import { IMoviesResponse } from "@/interfaces/tmdbMovies.interface";

export const fetchMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    const data : IMoviesResponse = await response.json();
    return data.results;
};