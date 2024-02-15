import { PrismaClient, Usuario } from '@prisma/client';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.types';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';
import { genSalt, hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function createUsuario(usuario: CreateUsuarioDto): Promise<Usuario> {
  const rounds = parseInt(process.env.SALT_ROUNDS!);
  const salt = await genSalt(rounds);
  const senha = await hash(usuario.senha, salt);
  return await prisma.usuario.create({
    data: {
      ...usuario,
      senha
    }
  });
}

export const updateUsuario = async (id: string, usuario: UpdateUsuarioDto): Promise<Usuario> => {
  const usuarioUpdated = await prisma.usuario.update({
    where: { id },
    data: usuario
  });
  return usuarioUpdated;
};

export async function findUsuarioByEmail(email: string): Promise<Usuario | null> {
  return await prisma.usuario.findUnique({ where: { email } });
}

export async function getUsuarios(tipo?: TiposUsuarios): Promise<Usuario[]> {
  if (!tipo) return prisma.usuario.findMany();
  return prisma.usuario.findMany({ where: { tipoUsuarioId: tipo } });
}

export async function findUsuarioById(id: string): Promise<Usuario | null> {
  return await prisma.usuario.findUnique({ where: { id } });
}

export const deleteUsuario = async (id: string): Promise<Usuario> => {
  return await prisma.usuario.delete({ where: { id } });
};
