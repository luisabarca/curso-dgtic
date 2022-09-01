// stateless, presentación
// destructuring the props
export const Saludo = ({ cargo, nombre }) => {
  return (
    <h3>
      Hola {cargo} {nombre}
    </h3>
  );
};
