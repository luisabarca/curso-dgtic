import { Contador } from "../../components/contador";
import { Modal } from "../../components/modal";
import { useAppContext } from "../../context/app-context";
import { Helmet } from "react-helmet";

export const InicioPage = () => {
  const { idioma } = useAppContext();
  
  return (
    <>
    <Helmet>
      <title>Página de inicio</title>
    </Helmet>
      <Contador valorInicial={1} />

      <Modal title={idioma === "es" ? "Seguro que deseas eliminar el archivo?" : "Are you sure?"} />
    </>
  );
};

export default InicioPage;