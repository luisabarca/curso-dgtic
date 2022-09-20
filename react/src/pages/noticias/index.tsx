import { Helmet } from "react-helmet";
import { BotonFavoritos } from "../../components/boton-favoritos";
import { Container, Content, Titulo } from "../../components/common";
import { useFavoritosContext } from "../../context/favoritos-context";
import { useGetNoticias } from "../../services/noticias";

export default function NoticiasPage() {
  // obtiene noticias
  const noticias = useGetNoticias();

  const { isFavorito, toggleFavorito } = useFavoritosContext();

  return (
    <Container>
      <Helmet>
        <title>Noticias</title>
      </Helmet>
      <h1 className="text-3xl my-5">Noticias</h1>

      <div className="grid grid-cols-2">
        {noticias &&
          noticias.length > 0 &&
          noticias.map((item, index) => {
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
