import { instance } from "../utils/http";

export interface User {
  email?: string;
  isAdmin?: boolean;
}

export async function DoLoginUser(email: string, senha: string): Promise<User> {
  const result = await instance.http.put("/auth", { email, senha });

  if (result.status !== 200) throw Error();

  const user: User = {
    email: email,
    isAdmin: result.data.isAdmin,
  };

  return user;
}

export async function CreateUser(
  nome: string,
  email: string,
  senha: string,
  tipoUsuarioId: string
) {
  const result = await instance.http.post("/usuario", {
    nome,
    email,
    senha,
    tipoUsuarioId,
  });

  if (result.status !== 201) throw Error();
}

export async function Logout() {
  try {
    await instance.http.delete("/auth");
  } catch (error) {
    console.log(error);
  }
}
