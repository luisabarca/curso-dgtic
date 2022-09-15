import { Button } from "../../components/button";
import { Contador } from "../../components/contador";
import { Modal } from "../../components/modal";
import { useAppContext } from "../../context/app-context";
import { useQueryObtenerEmpresas } from "./querys";

const CargandoDatos = ({ texto }: { texto?: string }) => <p>Cargando {texto}</p>;
const ErrorComponente = () => <p>Ocurrió un error</p>;

export const InicioPage = () => {
  const { idioma, setSesion } = useAppContext();
  
  const [result, reexecuteQuery] = useQueryObtenerEmpresas();
  const { data, error, fetching } = result;

  return (
    <>
      <Contador valorInicial={1} />

      {
        fetching && (
          <CargandoDatos texto="compañias" />
        )
      }

      {
        error && (
          <ErrorComponente />
        )
      }

      {
        !fetching && data.allCompanies.length > 0 && data.allCompanies.map((item: any) => {
          return (
            <li>{item.name}</li>
          )
        })
      }

      <Button onClick={reexecuteQuery}>Obtener empresas</Button>

      <Button onClick={() => {
        setSesion({
          id: 1,
          usuario: "luis",
        });
      }}>Iniciar sesión</Button>

      <Modal title={idioma === "es" ? "Seguro que deseas eliminar el archivo?" : "Are you sure?"} />
    </>
  );
};

export default InicioPage;