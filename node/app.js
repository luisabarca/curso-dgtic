const http = require("http");

const port = process.env.PORT || 3000;
const hostname = "0.0.0.0";

const server = http.createServer((req, res) => {
    req.on("error", () => {
        console.log(err);
    });
});

server.on("request", (req, res) => {
    console.log("request", req.method);

    if (req.method === "GET") {
        console.log("Respuesta para get");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hola Curso");
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor iniciado en ${hostname} puerto ${port}`);
});