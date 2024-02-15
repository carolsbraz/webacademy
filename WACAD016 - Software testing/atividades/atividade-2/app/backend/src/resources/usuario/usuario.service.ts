import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import {
  CreateUsuarioDto,
  UsuarioSemSenhaDto,
  UpdateUsuarioDto,
} from "./usuario.types";
const prisma = new PrismaClient();
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

export async function getUsuarios(
  tipo?: TiposUsuarios
): Promise<UsuarioSemSenhaDto[]> {
  if (!tipo)
    return prisma.usuario.findMany({
      select: {
        id: true,
        tipoUsuarioId: true,
        nome: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  return prisma.usuario.findMany({
    where: { tipoUsuarioId: tipo },
    select: {
      id: true,
      tipoUsuarioId: true,
      nome: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export const createUsuario = async (
  usuario: CreateUsuarioDto
): Promise<UsuarioSemSenhaDto> => {
  const rounds = parseInt(process.env.SALT_ROUNDS!);
  const salt = await bcrypt.genSalt(rounds);
  const hash = await bcrypt.hash(usuario.senha, salt);
  const newUsuario = await prisma.usuario.create({
    data: {
      ...usuario,
      senha: hash,
    },
  });
  return {
    id: newUsuario.id,
    tipoUsuarioId: newUsuario.tipoUsuarioId,
    nome: newUsuario.nome,
    email: newUsuario.email,
    createdAt: newUsuario.createdAt,
    updatedAt: newUsuario.updatedAt,
  };
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDto
): Promise<UsuarioSemSenhaDto> => {
  const updatedUsuario = await prisma.usuario.update({
    data: usuario,
    where: { id },
  });
  return {
    id: updatedUsuario.id,
    tipoUsuarioId: updatedUsuario.tipoUsuarioId,
    nome: updatedUsuario.nome,
    email: updatedUsuario.email,
    createdAt: updatedUsuario.createdAt,
    updatedAt: updatedUsuario.updatedAt,
  };
};

export const buscaUsuarioPorEmail = async (
  email: string
): Promise<UsuarioSemSenhaDto | null> => {
  return await prisma.usuario.findUnique({
    select: {
      id: true,
      tipoUsuarioId: true,
      nome: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
    where: { email },
  });
};

export const buscaUsuarioPorId = async (
  id: string
): Promise<UsuarioSemSenhaDto | null> => {
  return await prisma.usuario.findUnique({
    select: {
      id: true,
      tipoUsuarioId: true,
      nome: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
    where: { id },
  });
};

export const deleteUsuario = async (
  id: string
): Promise<UsuarioSemSenhaDto> => {
  const deletedUsuario = await prisma.usuario.delete({ where: { id } });
  return {
    id: deletedUsuario.id,
    tipoUsuarioId: deletedUsuario.tipoUsuarioId,
    nome: deletedUsuario.nome,
    email: deletedUsuario.email,
    createdAt: deletedUsuario.createdAt,
    updatedAt: deletedUsuario.updatedAt,
  };
};
