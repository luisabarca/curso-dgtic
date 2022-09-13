import { Button } from "../components/button";
import { Contador } from "../components/contador";
import { Modal } from "../components/modal";
import { Saludo } from "../components/saludos";

export const InicioPage = () => {
  return (
    <>
      <Saludo
        mostrarHola={true}
        isAdmin
        cargo="General"
        nombre="Vicente Guerrero"
      />

      <p>
        conexion a la base:
        <br />
        {process.env.REACT_APP_DB_CONEXION}
      </p>

      <Contador valorInicial={1} />

      <Button size="small" primary>
        Boton con Stitches
      </Button>

      <Modal title="Seguro que deseas eliminar el archivo?" />

      <div>
        <a href={process.env.REACT_APP_BASE_URL}>Ir a GRO</a>
      </div>
    </>
  );
};
