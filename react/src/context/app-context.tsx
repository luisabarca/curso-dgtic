import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type AppContextType = {
  tema: string;
  setTema: Dispatch<SetStateAction<string>>;
  idioma: string;
  setIdioma: Dispatch<SetStateAction<string>>;
  sesion: {} | null;
  setSesion: Dispatch<SetStateAction<{} | null>>;
  toggleIdioma: () => void;
  esSpanish: () => boolean;
};

export const AppContext = createContext<AppContextType | null>(null);

/**
 * Custom que retorna el context
 * @returns
 */
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("No existe el context AppContext");
  }

  return context;
};

/**
 * Provider para usar el context
 * @param param0
 * @returns
 */
export const AppContextProvider = ({ children }: { children: any }) => {
  const [tema, setTema] = useState("oscuro");
  const [idioma, setIdioma] = useState("es");
  const [sesion, setSesion] = useState<{} | null>(null);

  const toggleIdioma = () => {
    setIdioma(idioma === "es" ? "en" : "es");
  };

  const esSpanish = () => {
    return idioma === "es";
  };

  const initialValues: AppContextType = {
    tema,
    setTema,
    idioma,
    setIdioma,
    sesion,
    setSesion,
    toggleIdioma,
    esSpanish,
  };

  return (
    <AppContext.Provider value={initialValues}>{children}</AppContext.Provider>
  );
};

// AppContext.displayName = "AppContext";
