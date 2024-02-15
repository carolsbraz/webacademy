const http = require("http");
const fs = require("fs");
const createLink = require("./utils.js");

require("dotenv").config();

if (process.argv.length < 3) {
    throw new Error("Número de parâmetros inválidos");
}

const PORT = process.env.PORT ?? 6767;

const dir = process.argv[2];

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
    if (req.url === "/") {
        fs.readdir(dir, (err, files) => {
            if (err) throw new Error(err);
            files.forEach(file => { res.write(`${createLink(dir, file)}`); });
            res.end();
        })
    } else {
        res.write(`<a href="/">Voltar</a><br>`);
        fs.readFile(`.${req.url}`, "utf-8", (err, content) => {
            if (err) throw new Error(err);
            res.end(content);
        });
    }
})

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});