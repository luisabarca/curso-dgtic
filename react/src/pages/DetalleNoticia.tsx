import { useParams } from "react-router-dom";

export default function DetalleNoticiaPage() {
    const params = useParams();
    
    return (
        <h1>Detalle de Noticia: {params.noticiaId}</h1>
    );
}