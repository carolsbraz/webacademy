const http = require("http")
const url = require("url")
const fs = require("fs")

require("dotenv").config();

const PORT = process.env.PORT ?? 6767;


const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);

    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

    if (path == "") {
        path = "index.html";
    }

    let file = __dirname + "/public/" + path;

    fs.readFile(file, function (err, content) {
        if (err) {
            res.writeHead(404);
            res.end();
        } else {
            switch (path) {
                case "index.css":
                    res.writeHead(200, { "Content-type": "text/css" });
                    break;
                case "main.js":
                    res.writeHead(200, { "Content-type": "application/javascript" });
                    break;
                case "index.html":
                    res.writeHead(200, { "Content-type": "text/html" });
                    break;
            }
            res.end(content);
        }
    })
})

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});