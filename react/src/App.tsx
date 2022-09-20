// Default exports
import React, { Suspense } from "react";
import { styled } from "@stitches/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createClient, Provider } from "urql";
import { AppContextProvider } from "./context/app-context";
import { FavoritosProvider } from "./context/favoritos-context";
import FavoritosPage from "./pages/Favoritos";

// Named exports
const MenuSuperior = React.lazy(() => import("./components/menu-superior"));
const InicioPage = React.lazy(() => import("./pages/Inicio"));
const NoticiasPage = React.lazy(() => import("./pages/noticias"));
const UsuariosPage = React.lazy(() => import("./pages/Usuarios"));
const DetalleNoticiaPage = React.lazy(() => import("./pages/DetalleNoticia"));
const DetalleUsuarioPage = React.lazy(() => import("./pages/DetalleUsuario"));

const AppWrapperStyled = styled("div", {
  textAlign: "center",
});

const SkeletonMenu = styled("div", {
  backgroundColor: "#333",
  height: 90,
  width: "100%",
});

// La URL podría venir en una variable de ambiente
// REACT_APP_API_GRAPHQL_ENDPOINT
const client = createClient({
  url: "http://localhost:9002/graphql",
});

function App() {
  // Obtiene la config en JSON y lo transforma en objeto
  // const config = JSON.parse(process.env.REACT_APP_CONFIG_JSON ?? "");

  return (
    <BrowserRouter>
      <AppWrapperStyled>
        <Provider value={client}>
          <AppContextProvider>
            <FavoritosProvider>
              <Suspense fallback={<SkeletonMenu />}>
                <MenuSuperior />
              </Suspense>

              <Suspense fallback={<div>Cargando...</div>}>
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
                  <Route path="/favoritos" element={<FavoritosPage />} />
                </Routes>
              </Suspense>
            </FavoritosProvider>
          </AppContextProvider>
        </Provider>
      </AppWrapperStyled>
    </BrowserRouter>
  );
}

export default App;
