import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { guardarUsuario, useObtenerUsuarios } from "../services/usuarios";

export const UsuariosPage = () => {
  const [formData, setFormData] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const { isLoading, reload, usuarios} = useObtenerUsuarios();

  const guardar = () => {
    setIsSaving(true);
    guardarUsuario(formData).then(() => {
        setIsSaving(false);
        reload();
    });
  };

  return (
    <div>
      <h1 className="text-3xl">Usuarios</h1>
      {isError && <p>Ocurrio un error</p>}
      <input
        type="text"
        name="nombre"
        value={formData}
        onChange={(e) => {
          setFormData(e.target.value);
        }}
        className="border-gray-100"
        style={{
          border: "1px solid gray",
          margin: "1rem",
        }}
      />
      <Button onClick={guardar}>{ isSaving ? "Guardando..." : "Guardar"}</Button>

      {isLoading && <p>Cargando...</p>}
      {!isLoading && (
        <ul>
          {usuarios.length > 0 &&
            usuarios.map((user) => {
              return (
                <li>
                  <Link to={`/usuarios/${user.id}`}>{user.name}</Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
