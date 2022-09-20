import { useFavoritosContext } from "../context/favoritos-context";
import { Container, Content, Titulo } from "../components/common";
import { useGetNoticias } from "../services/noticias";
import { BotonFavoritos } from "../components/boton-favoritos";
import { Helmet } from "react-helmet";

export default function FavoritosPage() {
  // obtiene noticias en general
  const noticias = useGetNoticias();

  const { favoritos, isFavorito, toggleFavorito } = useFavoritosContext();

  // Obtiene noticias cuyos IDs están en la lista de favoritos
  const noticiasFavoritas = noticias.filter((item) =>
    favoritos.includes(item.id)
  );

  return (
    <Container>
      <Helmet>
        <title>Favoritos</title>
      </Helmet>
      <h1 className="text-3xl my-5">Favoritos</h1>

      <div className="grid grid-cols-2">
        {noticiasFavoritas.length > 0 &&
          noticiasFavoritas.map((item, index) => {
            return (
              <div
                className="bg-slate-200 p-4 m-4"
                key={`noticias-${item.id}-${index}`}
              >
                <Titulo>{item.title}</Titulo>
                <Content>{item.body}</Content>

                <BotonFavoritos
                  id={item.id}
                  onClick={toggleFavorito}
                  isFavorito={isFavorito}
                />
              </div>
            );
          })}
      </div>
    </Container>
  );
}
