import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const create = await prisma.categoria.create({
    data: {
      nome: "Eletrônicos",
      subcategorias: {
        create: [{ nome: "Celular" }, { nome: "Tablet" }, { nome: "Notebook" }],
      },
    },
  });

  const update = await prisma.categoria.update({
    where: {
      id: 1,
    },
    data: {
      nome: "Dispositivos",
    },
  });

  const erase = await prisma.subcategoria.delete({
    where: {
      id: 2,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
