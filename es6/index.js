import { REGISTROS_POR_PAGINA, mostrarPersona } from "./lib/utils";


console.log(REGISTROS_POR_PAGINA); // 10

const persona = {
    nombre: "Vicente Guerrero",
    cargo: "General",
};

mostrarPersona(persona);