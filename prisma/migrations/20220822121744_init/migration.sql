-- CreateTable
CREATE TABLE "directories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "isFolder" BOOLEAN NOT NULL,
    "lastModifier" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentId" TEXT NOT NULL,

    CONSTRAINT "directories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "directories" ADD CONSTRAINT "directories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "directories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
