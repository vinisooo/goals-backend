/*
  Warnings:

  - You are about to drop the `Check` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Goal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Check" DROP CONSTRAINT "Check_goal_id_fkey";

-- DropTable
DROP TABLE "Check";

-- DropTable
DROP TABLE "Goal";

-- CreateTable
CREATE TABLE "goal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "percentage" INTEGER,
    "amount" DOUBLE PRECISION,
    "target_amount" DOUBLE PRECISION NOT NULL,
    "image_url" TEXT NOT NULL DEFAULT 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',

    CONSTRAINT "goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "check" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "goal_id" INTEGER NOT NULL,

    CONSTRAINT "check_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "check" ADD CONSTRAINT "check_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "goal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
