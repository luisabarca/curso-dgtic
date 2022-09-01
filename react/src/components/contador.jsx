import { useState } from "react";
import { Button } from "./button";

export const Contador = ({ valorInicial }) => {
  const [valor, setValor] = useState(valorInicial ?? 0);

  const handleClick = () => {
    setValor(valor + 1);
  };

  return (
    <div>
      <div>Contador: {valor}</div>

      <Button onClick={handleClick}>Actualizar</Button>
    </div>
  );
};
