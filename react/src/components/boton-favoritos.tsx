import { Button } from "./button";

export const BotonFavoritos = ({ onClick, isFavorito, id }) => (
  <Button
    primary
    onClick={() => {
        onClick(id);
    }}
  >
    {isFavorito(id) ? "Eliminar favorito" : "Agregar a favoritos"}
  </Button>
);
