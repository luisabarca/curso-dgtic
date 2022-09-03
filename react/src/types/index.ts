
export interface IUbicacion {
  lat: number;
  long: number
}

export interface ILugar extends IUbicacion {
  nombre: string;
}

export type Ubicacion = {
  lat: number;
  long: number;
};

type NombreLugar = {
  nombre: string;
};

export type Lugar = Ubicacion & NombreLugar & {
  favorito?: boolean;
};

export type IdUsuario = string | number | null | undefined;

export enum TipoUsuario {
  ADMIN = "Administrador",
  EDITOR = "Editor",
}

export enum Direccion {
  ARRIBA = 10,
  ABAJO = 20,
  IZQUIERDA = 100,
  DERECHA
}