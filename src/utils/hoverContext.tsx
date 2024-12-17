// hoverContext.tsx
"use client"
import { IMovie } from "@/interfaces/tmdbMovies.interface"
import React, { createContext } from "react"

interface HoverContextType {
    movie: IMovie | null
    setHoveredMovie: (movie: IMovie | null) => void
}

export const HoverContext = createContext<HoverContextType>({
    movie: null,
    setHoveredMovie: () => {}
})

// Add Provider component
export const HoverProvider = ({ children }: { children: React.ReactNode }) => {
    const [hoveredMovie, setHoveredMovie] = React.useState<IMovie | null>(null)

    return (
        <HoverContext.Provider value={{ 
            movie: hoveredMovie, 
            setHoveredMovie: setHoveredMovie
        }}>
            {children}
        </HoverContext.Provider>
    )
}