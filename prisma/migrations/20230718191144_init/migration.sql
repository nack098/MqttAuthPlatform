-- CreateTable
CREATE TABLE `account` (
    `username` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `hash_password` VARCHAR(191) NOT NULL,
    `superuser` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `account_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `acl` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `topic` VARCHAR(191) NOT NULL,
    `readWrite` INTEGER NOT NULL,

    UNIQUE INDEX `acl_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
