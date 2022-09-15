import { useQuery } from "urql";

const QUERY_EMPRESAS = `
{
  allCompanies {
    name
    industry
  }
}
`;

export const useQueryObtenerEmpresas = () => {
  const query = useQuery({
    query: QUERY_EMPRESAS,
    pause: false,
  });

  return query;
};
