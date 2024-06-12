/*
  Warnings:

  - You are about to drop the column `name` on the `colors` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `colors` table. All the data in the column will be lost.
  - Added the required column `colors` to the `colors` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "colors_name_key";

-- AlterTable
ALTER TABLE "colors" DROP COLUMN "name",
DROP COLUMN "quantity",
ADD COLUMN     "colors" JSONB NOT NULL;
