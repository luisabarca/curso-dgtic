import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRef, useState } from "react";
import { createUsuario, deleteUsuario, updateUsuario, useUsuariosQuery } from "../services/usuarios";

type FormDataType = {
  name: string;
  email?: string;
  id?: number;
};

// Cliente
export default function UsuariosPage() {
  const { isError, isLoading, data: items, refetch } = useUsuariosQuery();
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
  });
  const emailRef = useRef<HTMLInputElement>();

  const queryClient = useQueryClient();

  const actualizar = async () => {
    const {name, email, id} = formData;

    if (!id) return;

    await updateUsuario(id, {
      name, 
      email,
    });
  };

  const guardar = async (params: {}) => {
    await createUsuario(params);
  }

  const eliminar = async (params: { id: number }) => {
    if (!params) return;
    await deleteUsuario(params?.id);
  }

  const updateMutation = useMutation(actualizar, {
    onSuccess: () => {
      refetch();
    }
  });

  const createMutation = useMutation(guardar, {
    onSuccess: () => {
      refetch();
      // queryClient.invalidateQueries([["getUsuarios"]]);
    },
  });

  const deleteMutation = useMutation(eliminar, {
    onSuccess: () => {
      refetch();
    }
  });

  const onSubmit = async () => {
    // input controlado (por React)
    const {id} = formData;

    // input no controlado
    // const email = emailRef.current?.value;

    if (id && id > 0) {
      updateMutation.mutate();
      return;
    }

    createMutation.mutate(formData);
  }

  const handleOnClick = (item: FormDataType) => {
    setFormData(item);
  }

  const handleDelete = async (item: FormDataType) => {
    if (item.id) {
      deleteMutation.mutate({
        id: item.id,
      });
    }
  }

  if (isError) {
    console.log("ERROR");
  }

  if (isLoading) {
    console.log("LOADING");
  }

  return (
    <div className="container mx-auto">
      <h1>Usuarios</h1>

      <div className="bg-blue-300 p-4">

        {
          formData.id && (
            <div>ID: {formData.id}</div>
          )
        }

      <div className="m-8">
        <label>
          Nombre: 
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              });
            }}
          />
        </label>
      </div>

      <div className="m-8">
        <label>
          Email: 
          <input
              type="text"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
            />
        </label>
      </div>

      <div className="m-8">
        <button onClick={onSubmit} className="border bg-slate-800 p-2">
          {
            formData.id && formData.id > 0 ? 'Actualizar' : 'Guardar'
          }
        </button>
      </div>
      </div>


      {items &&
        items.length > 0 &&
        items.map((item: FormDataType) => {
          return (
            <div key={`${item.id}`} className="p-2">
              {/* <Link href={`/usuarios/${item.id}`}> */}
                <a onClick={() => handleOnClick(item)}>{item.name} - {item.email}</a> - <button onClick={() => handleDelete(item)} className="bg-red-500 p-1">Eliminar</button>
              {/* </Link> */}
            </div>
          );
        })}
    </div>
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
