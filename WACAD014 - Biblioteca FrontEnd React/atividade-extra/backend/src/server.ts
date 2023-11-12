import { TiposUsuarios } from "./resources/tipoUsuario/tipoUsuario.constants";
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import error from "console";
import { v4 as uuidv4 } from "uuid";
import swaggerUi from "swagger-ui-express";
import logger from "morgan";
import cors from "cors";

import router from "./router";
import swaggerFile from "./swagger-output.json";
import { api } from "./api-info";
import { ProdutoCarrinho } from "./resources/compra/compra.types";
import setLangCookie from "./middlewares/setLangCookie";

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuarioId: string;
    carrinhoCompra: ProdutoCarrinho[];
  }
}

export class Api {
  public server: express.Application;
  public publicPath: string;

  constructor() {
    this.server = express();
    this.publicPath = `${process.cwd()}/public`;
  }

  async bootstrap(): Promise<Api> {
    try {
      await this.middleware();
      await this.router();
    } catch (err) {
      console.error(err);
    }

    return this;
  }

  private async middleware() {
    this.server.use(cors({ credentials: true, origin: api.frontendUrl }));
    this.server.use(express.json());
    this.server.use(cookieParser());
    this.server.use(
      session({
        genid: () => uuidv4(),
        secret: "LJHsadk5$3sdLas",
        resave: true,
        saveUninitialized: true,
      })
    );
    this.server.use(logger("common"));
    this.server.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    this.server.use(setLangCookie);
  }

  private async router() {
    this.server.use(router);

    try {
      this.server.listen(api.defaultPort);
    } catch (err) {
      console.error(err);
      throw error;
    }
  }
}
