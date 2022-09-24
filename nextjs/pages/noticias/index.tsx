import Link from "next/link";
import { useState } from "react";
import { getNoticias } from "../../services/noticias";

type NoticiasPageProps = {
  // La magia de Typescript para saber el tipo de dato que retorna la función
  // dame el tipo de datos (typeof) que retorna (ReturnType) getNoticias()
  // pero espera (Awaited) porque es función que retorna una promise
  noticias: Awaited<ReturnType<typeof getNoticias>>;
}

// Cliente
export default function NoticiasPage({ noticias }: NoticiasPageProps) {
  const [noticiasList, setNoticiasList] = useState(noticias);
  
  const actualizar = async () => {
    const noticias = await getNoticias();
    setNoticiasList(noticias);
  }

  return (
    <>
      <h1>Noticias</h1>
      {noticiasList && noticiasList.length > 0 &&
        noticiasList.map((item: any) => {
          return (
            <div key={`${item.id}`}>
              <Link href={`/noticias/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </div>
          );
        })}

        <button onClick={actualizar}>Actualizar</button>
    </>
  );
}

// Servidor (SSR)
export async function getServerSideProps() {
  const noticias = await getNoticias();

  return {
    props: {
      noticias: noticias.slice(0, 5),
    },
  };
}
