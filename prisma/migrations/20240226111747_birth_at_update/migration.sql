/*
  Warnings:

  - You are about to drop the column `bird_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `bird_at`,
    ADD COLUMN `birth_at` DATE NULL;
