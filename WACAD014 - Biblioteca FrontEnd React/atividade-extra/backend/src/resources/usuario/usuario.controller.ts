import { Request, Response } from "express";

import {
  getUsuarios,
  buscaUsuarioPorId,
  buscaUsuarioPorEmail,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "./usuario.service";
import { CreateUsuarioDto } from "./usuario.types";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const index = async (req: Request, res: Response) => {
  /*
  #swagger.summary = 'Listagem de usuários.'
  #swagger.parameters['tipo'] = {
    in: 'query',
    description: 'Tipo dos usuários desejados',
    type: 'string'
  }   
  #swagger.responses[200] = {
    schema: { $ref: '#/definitions/UsuariosSemSenhaArrayDto' }
  }    
  */
  const tipo = req.query.tipo as TiposUsuarios | undefined;
  try {
    const usuarios = await getUsuarios(tipo);
    res.status(200).json(usuarios);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = async (req: Request, res: Response) => {
  /*
  #swagger.summary = 'Cria um novo usuário (cliente ou admin).'
  #swagger.parameters['body'] = {
    in: 'body',
    schema: { $ref: '#/definitions/CreateUsuarioDto' }
  } 
  #swagger.responses[200] = {
    schema: { $ref: '#/definitions/UsuarioSemSenhaDto' }
  }   
  */
  const usuario = req.body as CreateUsuarioDto;
  try {
    if (await buscaUsuarioPorEmail(usuario.email))
      return res
        .status(400)
        .json({ msg: "Já existe um usuário com o email informado." });
    const newUsuario = await createUsuario(usuario);
    res.status(201).json(newUsuario);
  } catch (e: any) {
    console.log(e);
    res.status(500).json(e);
  }
};

const read = async (req: Request, res: Response) => {
  /*
  #swagger.summary = 'Recupera dados de um usuário específico.'
  #swagger.parameters['id'] = { description: 'ID do usuário desejado' }
  #swagger.responses[200] = {
    schema: { $ref: '#/definitions/UsuarioSemSenhaDto' }
  }   
  */
  const { id } = req.params;
  try {
    const usuario = await buscaUsuarioPorId(id);
    if (!usuario) return res.status(400).json({ msg: "Usuário não existe." });
    res.status(200).json(usuario);
  } catch (e) {
    res.status(500).json(e);
  }
};

const update = async (req: Request, res: Response) => {
  /*
  #swagger.summary = 'Altera os dados de um usuário específico.'
  #swagger.parameters['id'] = { description: 'ID do usuário' }
  #swagger.parameters['body'] = {
    in: 'body',
    schema: { $ref: '#/definitions/UpdateUsuarioDto' }
  }   
  #swagger.responses[200] = {
    schema: { $ref: '#/definitions/UsuarioSemSenhaDto' }
  }   
  */
  const { id } = req.params;
  const usuario = req.body;
  try {
    if (!(await buscaUsuarioPorId(id)))
      return res.status(400).json({ msg: "Usuário não existe." });
    await updateUsuario(id, usuario);
    res.status(200).json({ msg: "Usuário atualizado com sucesso." });
  } catch (e) {
    res.status(500).json(e);
  }
};

const remove = async (req: Request, res: Response) => {
  /*
  #swagger.summary = 'Apaga um usuário da base.'
  #swagger.parameters['id'] = { description: 'ID do usuário' }  
  */
  const { id } = req.params;
  try {
    if (!(await buscaUsuarioPorId(id)))
      return res.status(400).json({ msg: "Usuário não existe." });
    await deleteUsuario(id);
    res.status(200).json({ msg: "Usuário deletado com sucesso." });
  } catch (e) {
    res.status(500).json(e);
  }
};

export default { index, create, read, update, remove };
