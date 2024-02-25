/*
  Warnings:

  - You are about to drop the column `category_id` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_category_id_fkey";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "category_id",
ADD COLUMN     "category" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "Category";
