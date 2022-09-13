import { useParams } from "react-router-dom";

export const DetalleNoticiaPage = () => {
    const params = useParams();
    console.log(params);

    return (
        <h1>Detalle de Noticias</h1>
    );
}