import React from "react";
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

  guardarUsuario(11222222, TipoUsuario.EDITOR, "Luis", edad, {
    nombre: "Casa",
    lat: 10,
    long: 11,
  });

  return (
    <AppWrapperStyled>
      <MenuSuperior elementos={opciones} />
      <Saludo cargo="General" nombre="Vicente Guerrero" />

      <Contador valorInicial={1} />

      <Button size="small" primary>
        Boton con Stitches
      </Button>

      <Modal title="Seguro que deseas eliminar el archivo?" />
    </AppWrapperStyled>
  );
}

export default App;
