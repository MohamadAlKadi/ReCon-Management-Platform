/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Asset` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
