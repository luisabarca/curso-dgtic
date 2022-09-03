import { useEffect, useState } from "react";
import { Button } from "./button";

export const Contador = ({ valorInicial }) => {
  const [valor, setValor] = useState(valorInicial ?? 0);
  const [esGanador, setEsGanador] = useState(false);

  const handleClick = () => {
    setValor((valorActual) => valorActual + 1);
  };

  // Se ejecuta en cada renderizado
  useEffect(() => {
    console.log("desde useEffect");
  });

  useEffect(() => {
    // Cargamos datos del servidor
    // if (datos.length < 1) {
    //   fetch(`${process.env.REACT_APP_API_ENDPOINT}/usuarios`).then((data) => {
    //     setDatos(data);
    //   });

    //   obtenerUsuarios();
    // }
  }, []);

  useEffect(() => {
    if (valor >= process.env.REACT_APP_NUMERO_GANADOR) {
      setEsGanador(true);
    }
  }, [valor]);

  return (
    <div>
      {
        esGanador && <h1>Ganaste!!</h1>
      }

      <div>Contador: {valor}</div>

      <Button onClick={handleClick}>Actualizar</Button>
    </div>
  );
};
