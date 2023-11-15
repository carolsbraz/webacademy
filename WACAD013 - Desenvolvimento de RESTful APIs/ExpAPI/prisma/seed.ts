async function main() {
  await prisma.tipoUsuario.createMany({
    data: [
      { id: TiposUsuarios.CLIENT, rotulo: 'cliente' },
      { id: TiposUsuarios.ADMIN, rotulo: 'admin' }
    ],
    skipDuplicates: true
  });
}
