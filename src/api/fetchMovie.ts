import { api } from "./api"

export const fetchMovie = async (movieId: string) => {
    const response = await api.get(`/movie/${movieId}`, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS}`,
        },
    }) 
    return response.data;
}