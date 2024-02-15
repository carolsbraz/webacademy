import { Request, Response } from 'express';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';

import { createUsuario, deleteUsuario, findUsuarioByEmail, findUsuarioById, getUsuarios, updateUsuario } from './usuario.service';

async function index(req: Request, res: Response) {
  const tipo = req.query.tipo as TiposUsuarios | undefined;
  try {
    const usuarios = await getUsuarios(tipo);
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function create(req: Request, res: Response) {
  try {
    if (await findUsuarioByEmail(req.body.email)) return res.status(409).json({ msg: 'Usuário ja cadastrado' });
    const usuario = await createUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function read(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const usuario = await findUsuarioById(id);
    if (!usuario) return res.status(400).json({ msg: 'Não existe usuário' });
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto = req.body;
  try {
    const prod = await findUsuarioById(id);
    if (!prod) return res.status(400).json({ message: 'Não existe usuário' });
    await updateUsuario(id, produto);
    res.status(200).json({ message: 'Usuário atualizado' });
  } catch (e) {
    res.status(500).json(e);
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const prod = await findUsuarioById(id);
    console.log(prod);
    if (!prod) return res.status(400).json({ message: 'Não existe usuário' });
    await deleteUsuario(id);
    res.status(200).json({ message: 'Usuário apagado' });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export default { index, create, read, update, remove };
