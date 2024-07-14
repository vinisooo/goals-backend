/*
  Warnings:

  - Added the required column `goal_price` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "goal_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
