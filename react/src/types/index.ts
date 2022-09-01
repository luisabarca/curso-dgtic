
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

export type Lugar = Ubicacion & {
  nombre: string;
};

export type IdUsuario = string | number;

export enum TipoUsuario {
  ADMIN = "Administrador",
  EDITOR = "Editor",
}