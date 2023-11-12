import { Request, Response } from "express";

import { TiposUsuarios } from "./../tipoUsuario/tipoUsuario.constants";
import { checkAuth, checkIsAdmin } from "./auth.service";
import { SignUpDto } from "./auth.types";
import {
  createUsuario,
  buscaUsuarioPorEmail,
} from "../usuario/usuario.service";

const signup = async (req: Request, res: Response) => {
  /*
  #swagger.summary = "Registro de novos clientes."
  #swagger.parameters['body'] = {
    in: 'body',
    schema: { $ref: '#/definitions/SignUpDto' }
  }
  #swagger.responses[201] = {
    schema: { $ref: '#/definitions/UsuarioSemSenhaDto'}
  }
  */
  const usuario = req.body as SignUpDto;
  try {
    if (await buscaUsuarioPorEmail(usuario.email))
      return res
        .status(400)
        .json({ msg: "Já existe usuário com o email informado." });
    const newUsuario = await createUsuario({
      ...usuario,
      tipoUsuarioId: TiposUsuarios.CLIENT,
    });
    res.status(201).json(newUsuario);
  } catch (e: any) {
    console.log(e);
    res.status(500).json(e.errors);
  }
};

const login = async (req: Request, res: Response) => {
  /*
  #swagger.summary = "Autentificação de usuários (clientes ou admins)."
  #swagger.parameters['body'] = {
    in: 'body',
    schema: { $ref: '#/definitions/LoginDto' }
  }
  #swagger.responses[200] = {
    schema: { $ref: '#/definitions/LoginResponseMsg'}
  }
  */
  const { email, senha } = req.body;
  try {
    const usuario = await checkAuth({ email, senha });
    if (!usuario)
      return res.status(401).json({ msg: "Email e/ou senha incorretos" });
    req.session.uid = usuario.id;
    const isAdmin = await checkIsAdmin(usuario.id);

    res.status(200).json({
      msg: "Usuário autenticado com sucesso",
      isAdmin,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const logout = (req: Request, res: Response) => {
  /*
  #swagger.summary = "Logout de usuários."
  #swagger.responses[200] = {
    schema: { $ref: '#/definitions/LogoutResponseMsg'}
  }  
  */
  if (req.session.uid) {
    req.session.destroy((err) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({ msg: "Usuario deslogado com sucesso." });
    });
  } else {
    res.status(401).json({ msg: "O usuário não estava logado." });
  }
};

export default { login, logout, signup };
