-- CreateTable
CREATE TABLE `images_tutorial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tutorial_detail_id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `images_tutorial` ADD CONSTRAINT `images_tutorial_tutorial_detail_id_fkey` FOREIGN KEY (`tutorial_detail_id`) REFERENCES `tutorial_detail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
