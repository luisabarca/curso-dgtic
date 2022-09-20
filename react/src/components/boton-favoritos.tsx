import { Button } from "./button";

type BotonFavoritosProps = {
    onClick: (id: number) => void;
    isFavorito: (id: number) => boolean;
    id: number;
}

export const BotonFavoritos = ({ onClick, isFavorito, id }: BotonFavoritosProps) => (
  <Button
    primary
    onClick={() => {
        onClick(id);
    }}
  >
    {isFavorito(id) ? "Eliminar favorito" : "Agregar a favoritos"}
  </Button>
);
