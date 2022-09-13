import { useEffect, useState } from "react";
import { Usuario } from "../types";

export const obtenerUsuarios = async () => {
  try {
    const response = await fetch("http://localhost:3001/usuarios");
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
