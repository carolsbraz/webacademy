import { SignUpDto } from "./resources/auth/auth.types";
import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();

const doc = {
  info: {
    title: "API da Loja virtual",
    description:
      "Documentação da API da Loja virtual implementada durante o Web Academy.",
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
  definitions: {
    // Resourse Auth
    LoginDto: {
      email: "maria@icomp.ufam.edu.br",
      senha: "12345678",
    },
    LoginResponseMsg: {
      msg: "Usuário autenticado com sucesso",
      isAdmin: true,
    },
    SignUpDto: {
      nome: "Maria Eduarda",
      email: "maria@icomp.ufam.edu.br",
      senha: "12345678",
    },
    LogoutResponseMsg: {
      msg: "Usuario deslogado com sucesso.",
    },
    // Resource Usuário
    CreateUsuarioDto: {
      nome: "Maria Eduarda",
      email: "maria.eduarda@icomp.ufam.edu.br",
      senha: "12345678",
      tipoUsuarioId: "7edd25c6-c89e-4c06-ae50-c3c32d71b8ad",
    },
    UpdateUsuarioDto: {
      nome: "Novo nome do usaurio",
      email: "novo.email@icomp.ufam.edu.br",
      senha: "12345678",
      tipoUsuarioId: "6a4cda94-fbb6-476b-be29-f4124cae9058",
    },
    UsuarioSemSenhaDto: {
      id: "4443dd66-7864-4302-a14e-53dc6f451952",
      nome: "Mr. Melody Friesen",
      email: "Pansy82@gmail.com",
      tipoUsuarioId: "6a4cda94-fbb6-476b-be29-f4124cae9058",
      createdAt: "2023-11-08T14:35:31.061Z",
      updatedAt: "2023-11-08T14:35:31.061Z",
    },
    UsuariosSemSenhaArrayDto: [
      {
        id: "8c52601d-26ca-4a69-af86-473c62752285",
        tipoUsuarioId: "7edd25c6-c89e-4c06-ae50-c3c32d71b8ad",
        nome: "Minnie Daniel",
        email: "Rosina.Stark@gmail.com",
        createdAt: "2023-10-29T09:52:56.825Z",
        updatedAt: "2023-10-29T09:52:56.825Z",
      },
    ],
    // Resource Produto
    CreateProdutoDto: {
      nome: "Martelo",
      preco: 29.0,
      estoque: 10,
    },
    UpdateProdutoDto: {
      nome: "Martelo",
      preco: 29.0,
      estoque: 10,
    },
    ProdutosArray: [
      {
        id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
        nome: "Bacon",
        preco: 261,
        estoque: 1,
        createdAt: "2023-11-07T19:27:15.645Z",
        updatedAt: "2023-11-07T19:27:15.645Z",
      },
    ],
    Produto: {
      id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
      nome: "Bacon",
      preco: 261,
      estoque: 1,
      createdAt: "2023-11-07T19:27:15.645Z",
      updatedAt: "2023-11-07T19:27:15.645Z",
    },
    // Resource Compra
    AddProdutoCarrinhoMsg: {
      msg: "Item adicionado ao carrinho",
    },
    FinalizaCompraMsg: {
      msg: "Compra feita com sucesso",
    },
    ProdutosCarrinhoList: [
      {
        id: "06193fb5-b17b-428b-8bbe-563709e2c9f1",
        quantidade: 10,
      },
    ],
  },
};

const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
