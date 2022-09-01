import { IdUsuario, Lugar, TipoUsuario } from "../types";

export function guardarUsuario(
  id: IdUsuario,
  tipoUsuario: TipoUsuario,
  nombre: string,
  edad?: number,
  direccion?: Lugar
): boolean {
  console.log(nombre, edad, direccion);

  if (typeof id == "number") {
    // muestra metodos para numérico
  } else if (typeof id == "string") {
    // muestra métodos para string
  }

  switch (tipoUsuario) {
    case TipoUsuario.ADMIN:
      console.log("admin");
      break;

    case TipoUsuario.EDITOR:
      console.log("editor");
      break;

    default:
      break;
  }

  return true;
}
