import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Usuario } from "../types";

export default function DetalleUsuarioPage() {
  const params = useParams();

  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.usuarioId}`)
      .then(async (response) => {
        const datos = await response.json();

        setUsuario(datos);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("asasasa");
      });
  }, [params]);

  if (!usuario) return <h1>Loading...</h1>;

  return (
    <div>
      <Helmet>
        <title>Detalle de usuarios</title>
      </Helmet>
      <h1>Detalle de Usuario</h1>
      <p>{usuario.name}</p>
    </div>
  );
}
