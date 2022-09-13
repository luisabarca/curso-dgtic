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
import { AppContextProvider } from "./context/app-context";
import { createClient, Provider } from "urql";

const AppWrapperStyled = styled("div", {
  textAlign: "center",
});

const client = createClient({
  url: "http://localhost:9002/graphql",
});

function App() {
  // Obtiene la config en JSON y lo transforma en objeto
  const config = JSON.parse(process.env.REACT_APP_CONFIG_JSON ?? "");
  console.log("config", config);

  return (
    <AppWrapperStyled>
      <Provider value={client}>
        <AppContextProvider>
          <MenuSuperior />
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/noticias" element={<NoticiasPage />} />
            <Route
              path="/noticias/:noticiaId"
              element={<DetalleNoticiaPage />}
            />
            <Route
              path="/usuarios/:usuarioId"
              element={<DetalleUsuarioPage />}
            />
            <Route path="/usuarios" element={<UsuariosPage />} />
          </Routes>
        </AppContextProvider>
      </Provider>
    </AppWrapperStyled>
  );
}

export default App;
