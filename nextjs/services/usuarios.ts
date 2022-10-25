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

export const createUsuario = async (datos: {}) => {
    const resp = await axiosInstance.post("/usuarios", datos);
}

export const useUsuariosQuery = () => {
    return useQuery(["getUsuarios"], getUsuarios);
}