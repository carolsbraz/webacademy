export const checkAuth = async (credenciais: LoginDto): Promise<Usuario | null> => {
  const { email, senha } = credenciais;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return null;
  const ok = await bcrypt.compare(senha, usuario.senha);
};
