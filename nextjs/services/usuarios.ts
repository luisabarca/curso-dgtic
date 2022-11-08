import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
});


export const getUsuarios = async () => {
    const resp = await axiosInstance.get("/usuarios");
    return resp.data;
}

/**
 * Crea
 * @param datos 
 */
export const createUsuario = async (datos: {}) => {
    const resp = await axiosInstance.post("/usuarios", datos);
}

/**
 * Actualiza
 * @param datos 
 */
export const updateUsuario = async (id: number, datos: {}) => {
    return await axiosInstance.put(`/usuarios/${id}`, datos);
}

/**
 * Actualiza
 * @param datos 
 */
export const deleteUsuario = async (id: number) => {
    return await axiosInstance.delete(`/usuarios/${id}`);
}

export const useUsuariosQuery = () => {
    return useQuery(["getUsuarios"], getUsuarios);
}