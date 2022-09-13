import { styled } from "@stitches/react";
import { MenuSuperior } from "./components/menu-superior";
import { TipoUsuario } from "./types";
import { guardarUsuario } from "./utils/guardarUsuario";
import { Route, Routes } from "react-router-dom";
import { InicioPage } from "./pages/Inicio";
import { NoticiasPage } from "./pages/Noticias";
import { UsuariosPage } from "./pages/Usuarios";
import { DetalleNoticiaPage } from "./pages/DetalleNoticia";
import { DetalleUsuarioPage } from "./pages/DetalleUsuario";

const AppWrapperStyled = styled("div", {
  textAlign: "center",
});

function App() {
  const edad: number = 18;
  const opciones = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Usuario",
      href: "/usuarios",
    },
    {
      title: "Noticias",
      href: "/noticias",
    },
  ];

  // Obtiene la config en JSON y lo transforma en objeto
  const config = JSON.parse(process.env.REACT_APP_CONFIG_JSON ?? "");
  console.log("config", config);

  guardarUsuario(1, TipoUsuario.EDITOR, "Luis", edad, {
    nombre: "Casa",
    lat: 10,
    long: 11,
  });

  return (
    <AppWrapperStyled>
      <MenuSuperior elementos={opciones} />

      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/noticias/:noticiaId" element={<DetalleNoticiaPage />} />
        <Route path="/usuarios/:usuarioId" element={<DetalleUsuarioPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
      </Routes>
    </AppWrapperStyled>
  );
}

export default App;
