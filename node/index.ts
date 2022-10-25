import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createUserRoutes } from "./routes/usuarios";

const app = express();

const options = {
    origin: "http://localhost:3002",
};

app.use(cors(options));
app.use(bodyParser.json());

createUserRoutes(app);

app.get("/", (req, res) => {
    res.send({
        status: "OK",
    });
});

app.listen(3001, () => {
    console.log("Servidor activo")
});