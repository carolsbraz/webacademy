const http = require("http");
const fs = require("fs");
const str_helpers = require("./strings_helper");

require("dotenv").config();

if (process.argv.length < 3) {
    throw new Error("Número de parâmetros inválidos");
}

const PORT = process.env.PORT ?? 6767;

const dir = process.argv[2];

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
    fs.readdir(dir, (err, files) => {
        if(err) throw new Error(err);
        files.forEach(file=>{ res.write(`${str_helpers.upper(file)}<br>`); })
        res.end();
    })
})

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});