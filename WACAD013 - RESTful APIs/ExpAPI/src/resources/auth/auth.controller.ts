import { Request, Response } from 'express';

const signup = async (req: Request, res: Response) => {
  const usuario = req.body as SignUpDto;
  try {
    if (await buscaUsuarioPorEmail(usuario.email)) return res.status(400).json({ msg: 'Email informado já está sendo usado' });
    const newUsuario = await createUsuario({
      ...usuario,
      tipoUsuarioId: TiposUsuarios.CLIENT
    });
    res.status(201).json(newUsuario);
  } catch (e: any) {
    res.status(500).json(e.errors);
  }
};

const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  try {
    const usuario = await checkAuth({ email, senha });
    if (!usuario)
      return res.status(401).json({
        msg: 'Email e/ou senha incorretos'
      });
    req.session.uid = usuario.id;
    req.session.tipoUsuarioId = usuario.tipoUsuarioId;
    res.status(200).json({ msg: 'Usuário autenticado' });
  } catch (e) {
    res.status(500).json(e);
  }
};

export default { signup, login };
