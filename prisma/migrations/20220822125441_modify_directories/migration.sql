-- DropForeignKey
ALTER TABLE "directories" DROP CONSTRAINT "directories_parentId_fkey";

-- AlterTable
ALTER TABLE "directories" ALTER COLUMN "parentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "directories" ADD CONSTRAINT "directories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "directories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
