import { Contador } from "../../components/contador";
import { Modal } from "../../components/modal";
import { useAppContext } from "../../context/app-context";

export const InicioPage = () => {
  const { idioma } = useAppContext();
  
  return (
    <>
      <Contador valorInicial={1} />

      <Modal title={idioma === "es" ? "Seguro que deseas eliminar el archivo?" : "Are you sure?"} />
    </>
  );
};

export default InicioPage;