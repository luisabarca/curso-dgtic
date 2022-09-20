import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

export default function DetalleNoticiaPage() {
  const params = useParams();

  return (
    <>
      <Helmet>
        <title>Detalle de noticia</title>
      </Helmet>
      <h1>Detalle de Noticia: {params.noticiaId}</h1>
    </>
  );
}
