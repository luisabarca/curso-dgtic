import { Helmet } from "react-helmet";
import { useQueryObtenerEmpresas } from "./querys";

const CargandoDatos = ({ texto }: { texto?: string }) => (
  <p>Cargando {texto}</p>
);
const ErrorComponente = () => <p>Ocurrió un error</p>;

export const GraphqlPage = () => {
  const [result] = useQueryObtenerEmpresas();
  const { data, error, fetching } = result;

  return (
    <>
      <Helmet>
        <title>GraphQL</title>
      </Helmet>

      {fetching && <CargandoDatos texto="compañias" />}

      {error && <ErrorComponente />}

      {!fetching &&
        data.allCompanies.length > 0 &&
        data.allCompanies.map((item: any) => {
          return <li>{item.name}</li>;
        })}
    </>
  );
};

export default GraphqlPage;
