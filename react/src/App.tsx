import { styled } from "@stitches/react";
import { Contador } from "./components/contador";
import { MenuSuperior } from "./components/menu-superior";
import { Saludo } from "./components/saludos";
import { TipoUsuario } from "./types";
import { Modal } from "./components/modal";
import { guardarUsuario } from "./utils/guardarUsuario";
import { Button } from "./components/button";

const AppWrapperStyled = styled("div", {
  textAlign: "center",
});

function App() {
  const edad: number = 18;
  const opciones = ["Inicio", "Usuario", "Noticias"];
  // const opcionesAdmin = [...opciones, "Configuración", "Iniciar sesión"];

  // Obtiene la config en JSON y lo transforma en objeto
  const config = JSON.parse(process.env.REACT_APP_CONFIG_JSON ?? "");
  console.log('config', config);

  guardarUsuario(1, TipoUsuario.EDITOR, "Luis", edad, {
    nombre: "Casa",
    lat: 10,
    long: 11,
  });

  return (
    <AppWrapperStyled>
      <MenuSuperior elementos={opciones} />
      <Saludo
        mostrarHola={true}
        isAdmin
        cargo="General"
        nombre="Vicente Guerrero"
      />

      <p>
        conexion a la base:<br />
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
    </AppWrapperStyled>
  );
}

export default App;
