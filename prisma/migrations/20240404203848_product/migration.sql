/*
  Warnings:

  - Added the required column `quantity` to the `colors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "colors" ADD COLUMN     "quantity" INTEGER NOT NULL;
