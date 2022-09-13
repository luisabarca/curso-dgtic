import { useEffect, useState } from "react";
import { Button } from "./button";

export const Contador = ({ valorInicial }) => {
  const [valor, setValor] = useState(valorInicial ?? 0);
  const [esGanador, setEsGanador] = useState(false);

  const handleClick = () => {
    setValor((valorActual) => valorActual + 1);
  };

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
