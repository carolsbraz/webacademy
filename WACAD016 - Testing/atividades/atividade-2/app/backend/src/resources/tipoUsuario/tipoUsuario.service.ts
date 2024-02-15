import { PrismaClient, TipoUsuario } from "@prisma/client";
const prisma = new PrismaClient();

export const getTiposUsuarios = async (): Promise<TipoUsuario[]> => {
  return await prisma.tipoUsuario.findMany();
};
