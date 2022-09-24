

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "POST":
            res.status(200).json({
                status: "guardado"
            });
            break;
        case "GET":
            console.log("hola en el servidor");
            
            res.status(200).json({
                status: "ok",
                categoria: req.query.categoria,
            });
            
            break;
        case "DELETE":
            res.status(200).json({
                status: "DELETED"
            });
            break;
    }
}