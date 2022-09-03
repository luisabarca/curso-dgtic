// stateless, presentación

import { Button } from "./button";

// destructuring the props
export const Saludo = (props) => {
  if (!props.cargo && !props.nombre) return null;

  if (!props.nombre) return <h1>Hola Desconocido</h1>;

  if (props.nombre === "mundo") return <h1>Que original!</h1>;

  // if (props.isLoading) return <LoadingComponent />

  return (
    <h3>
      {props.mostrarHola ? <span>Hola </span> : null}
      {props.cargo ?? ""} {props.nombre ?? ""}
      
      {
        props.isAdmin ? <Button>Eliminar</Button> : null
      }
    </h3>
  );
};
