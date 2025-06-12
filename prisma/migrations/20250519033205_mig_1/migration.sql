-- CreateTable
CREATE TABLE `master_tutorial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `kode_matakuliah` VARCHAR(191) NOT NULL,
    `url_presentation` VARCHAR(191) NOT NULL DEFAULT '',
    `url_finished` VARCHAR(191) NOT NULL DEFAULT '',
    `createor_email` VARCHAR(191) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tutorial_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `master_tutorial_id` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tutorial_detail` ADD CONSTRAINT `tutorial_detail_master_tutorial_id_fkey` FOREIGN KEY (`master_tutorial_id`) REFERENCES `master_tutorial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
