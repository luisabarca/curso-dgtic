import { Request, Response } from "express";
import { createUser, deleteUser, getUsuario, getUsuarios, update } from "../services/usuarios";

export function createUserRoutes(app) {
    /**
     * Obtiene todos los usuarios
     */
    app.get("/usuarios", async (req, res) => {
        const usuarios = await getUsuarios();
    
        res.send(usuarios);
    });
    
    /**
     * Obtener 1 usuario
     */
    app.get("/usuarios/:id", async (req, res) => {
        const usuario = await getUsuario(parseInt(req.params.id));
    
        res.send(usuario);
    });
    
    app.post("/usuarios", async (req: Request, res: Response) => {
        // con body-parser obtenemos el payload
        const { name, email } = req.body;
    
        const usuario = await createUser(name, email);
    
        res.send({
            status: "OK",
            usuario,
        });
    });
    
    app.put("/usuarios/:id", async (req: Request, res: Response) => {
        await update(req.body, parseInt(req.params.id));
    
        res.send("OK");
    });
    
    app.delete("/usuarios/:id", async (req, res) => {
        await deleteUser(Math.abs(req.params.id));
    
        res.send("OK");
    });
}
