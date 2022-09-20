import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type FavoritosContextType = {
    favoritos: number[];
    setFavoritos: Dispatch<SetStateAction<number[]>>
    agregarFavorito: (id: number) => void;
    eliminarFavorito: (id: number) => void;
    toggleFavorito: (id: number) => void;
    isFavorito: (id: number) => boolean;
    count: number;
}

const FavoritosContext = createContext<FavoritosContextType | null>(null);

export const useFavoritosContext = () => {
    const context = useContext(FavoritosContext);

    if (!context) {
        throw new Error("No existe el contexto de favoritos");
    }

    return context;
}

export const FavoritosProvider = ({ children }: { children: React.ReactNode }) => {
    const [favoritos, setFavoritos] = useState<number[]>([]);

    const agregarFavorito = (id: number) => {
        // Si ya existe, no agregar de nuevo
        if (favoritos.includes(id)) {
            return;
        }

        // agregar
        setFavoritos([
            ...favoritos,
            id,
        ]);
    };

    const eliminarFavorito = (id: number) => {
        // Encuentra el elemento en el arreglo
        const newFavs = favoritos.filter((item: number) => item !== id);

        setFavoritos(newFavs);
    };

    const isFavorito = (id: number) => {
        return favoritos.includes(id);
    };

    const toggleFavorito = (id: number) => {
        if (isFavorito(id)) {
            eliminarFavorito(id);
        } else {
            agregarFavorito(id);
        }
    };

    return (
        <FavoritosContext.Provider value={{
            favoritos,
            setFavoritos,
            eliminarFavorito,
            agregarFavorito,
            toggleFavorito,
            isFavorito,
            count: favoritos.length,
        }}>
        {children}
        </FavoritosContext.Provider>
    )
}

