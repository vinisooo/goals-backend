/*
  Warnings:

  - You are about to drop the column `goal_price` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Goal` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target_amount` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "goal_price",
DROP COLUMN "price",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "target_amount" DOUBLE PRECISION NOT NULL;
