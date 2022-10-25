import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRef, useState } from "react";
import { createUsuario, useUsuariosQuery } from "../services/usuarios";

type FormDataType = {
  name: string;
//   email: string;
};

// Cliente
export default function UsuariosPage() {
  const { isError, isLoading, data: items, refetch } = useUsuariosQuery();

  const emailRef = useRef<HTMLInputElement>();

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    // email: "",
  });

  const onSubmit = async () => {
    // input controlado (por React)
    const name = formData.name;

    // input no controlado
    const email = emailRef.current?.value;

    await createUsuario({
        name,
        email,
    });
  }

  if (isError) {
    console.log("ERROR");
  }

  if (isLoading) {
    console.log("LOADING");
  }

  return (
    <>
      <h1>Usuarios</h1>

      <div>
        <label>
          Nombre
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value.trim(),
              });
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Email
          <input type="text" ref={emailRef} />
        </label>
      </div>
      <div>
        <button onClick={onSubmit}>Enviar</button>
      </div>

      {items &&
        items.length > 0 &&
        items.map((item: any) => {
          return (
            <div key={`${item.id}`}>
              <Link href={`/usuarios/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </div>
          );
        })}
    </>
  );
}

// Servidor (SSR)
// export async function getServerSideProps() {
//     const datos = await getUsuarios();

//   return {
//     props: {
//       usuarios: datos,
//     },
//   };
// }
