import { PrismaClient } from "@prisma/client";
import { TiposUsuarios } from "../src/resources/tipoUsuario/tipoUsuario.constants";
const prisma = new PrismaClient();

async function main() {
  await prisma.tipoUsuario.createMany({
    data: [
      { id: TiposUsuarios.CLIENT, rotulo: "cliente" },
      { id: TiposUsuarios.ADMIN, rotulo: "admin" },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
