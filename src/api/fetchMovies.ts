import { IMoviesResponse } from "@/interfaces/tmdbMovies.interface";
import { api } from "./api";

export const fetchMovies = async (page: number = 1, genres : string[] = []) => {

    try {
        console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY);
        const response = await api.get("/discover/movie", {
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: "en-US",
                include_adult: false,
                include_video: false,
                page: page,
                with_watch_monetization_types: "flatrate",
                with_genres: genres.join(','),
            },
        });
        const data : IMoviesResponse = response.data;
        console.log(data.results);
        return data.results;
    } catch (error) {
        console.log(error);
        return [];
    }

};