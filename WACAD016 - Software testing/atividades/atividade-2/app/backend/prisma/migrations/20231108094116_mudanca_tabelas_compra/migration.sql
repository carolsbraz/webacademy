/*
  Warnings:

  - You are about to alter the column `usuarioId` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(40)`.
  - You are about to alter the column `tipoUsuarioId` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(40)`.
  - You are about to drop the `compras_itens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `compras` DROP FOREIGN KEY `compras_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `compras_itens` DROP FOREIGN KEY `compras_itens_compraId_fkey`;

-- DropForeignKey
ALTER TABLE `compras_itens` DROP FOREIGN KEY `compras_itens_produtoId_fkey`;

-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `usuarios_tipoUsuarioId_fkey`;

-- DropIndex
DROP INDEX `tipos_usuarios_rotulo_key` ON `tipos_usuarios`;

-- AlterTable
ALTER TABLE `compras` MODIFY `usuarioId` CHAR(40) NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` MODIFY `tipoUsuarioId` CHAR(40) NOT NULL;

-- DropTable
DROP TABLE `compras_itens`;

-- CreateTable
CREATE TABLE `compras_produtos` (
    `id` CHAR(40) NOT NULL,
    `compraId` CHAR(40) NOT NULL,
    `produtoId` CHAR(40) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras_produtos` ADD CONSTRAINT `compras_produtos_compraId_fkey` FOREIGN KEY (`compraId`) REFERENCES `compras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras_produtos` ADD CONSTRAINT `compras_produtos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipos_usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
