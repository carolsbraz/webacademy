import { Usuario } from '@prisma/client';

export type CreateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>;

export type UpdateUsuarioDto = CreateUsuarioDto;
