import { useRouter } from "next/router"
import { getNoticia, getNoticias } from "../../services/noticias";

export default function NoticiasPage(props: any) {
    // const router = useRouter();
    // const { noticiaId } = router.query;

    return (
        <>
            <h1>{props.noticia.title}</h1>
            <div>{props.noticia.body}</div>
        </>
    )
}

export async function getStaticProps(props: any) {
    const noticia = await getNoticia(props.params.noticiaId);
  
    return {
      props: {
        noticia,
      },
    };
  }


export async function getStaticPaths() {
    // Obtenemos del API los registros
    const noticias = await getNoticias();

    // generamos rutas para cada página
    const ids = noticias.map((item) => {
        return {
            params: {
                noticiaId: item.id.toString(),
            }
        };
    });

    return {
        paths: ids,
        fallback: false,
    }
}

