/*
  Warnings:

  - Added the required column `content_json` to the `tutorial_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tutorial_detail` ADD COLUMN `content_json` JSON NOT NULL;
