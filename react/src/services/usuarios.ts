import { useEffect, useState } from "react";
import type { Usuario } from "../types";

export const obtenerUsuarios = async () => {
  try {
    // Esto puede ir en el .env REACT_APP_API_USERS_ENDPOINT
    // process.env.REACT_APP_API_USERS_ENDPOINT
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const useObtenerUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * funcion para volver a actualizar los datos
   */
  const reload = () => {
    setIsLoading(true);

    obtenerUsuarios().then((datos) => {
      setUsuarios(datos);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (usuarios.length > 0) return;

    obtenerUsuarios().then((datos) => {
        setUsuarios(datos);
        setIsLoading(false);
    });
    
  }, [usuarios]);

  return {
    reload,
    isLoading,
    usuarios,
  };
};

export const guardarUsuario = async (formData: string) => {
  try {
    // Necesario tenerlo local con JSON faker
    await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.random() * 100,
        name: formData,
      }),
    });

    return true;
  } catch (error) {
    return false;
  }
};
