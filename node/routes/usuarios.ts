import { Request, Response } from "express";
import { createUser, deleteUser, getUsuario, getUsuarios, update } from "../services/usuarios";

export function createUserRoutes(app) {
    app.get("/usuarios", async (req, res) => {
        const usuarios = await getUsuarios();
    
        res.send(usuarios);
    });
    
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
    
    app.put("/usuarios/:id", async (req, res) => {
        await update({
            ...req.body,
        }, req.params.id);
    
        res.send("OK");
    });
    
    app.delete("/usuarios/:id", async (req, res) => {
        await deleteUser(Math.abs(req.params.id));
    
        res.send("OK");
    });
}
