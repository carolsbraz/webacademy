const express = require("express")
const dotenv = require("dotenv")

dotenv.config()
const app = express()

const PORT = process.env.PORT ?? 1234

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/about", (req, res) => {
    res.send("Sobre a aplicação")
})

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`)
})