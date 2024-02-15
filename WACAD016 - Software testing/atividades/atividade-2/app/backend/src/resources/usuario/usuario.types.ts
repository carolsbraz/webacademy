import { Usuario } from "@prisma/client";

export type CreateUsuarioDto = Pick<
  Usuario,
  "tipoUsuarioId" | "nome" | "email" | "senha"
>;
export type UsuarioSemSenhaDto = Omit<Usuario, "senha">;
export type UpdateUsuarioDto = Pick<
  Usuario,
  "tipoUsuarioId" | "nome" | "email" | "senha"
>;
