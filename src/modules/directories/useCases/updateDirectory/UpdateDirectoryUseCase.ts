import { prisma } from "database/prismaClient";

interface IUpdateDirectoryUseCase {
  id: string;
  name: string;
  content?: string;
  isFolder: boolean;
  lastModifier: string;
  parentId: string;
}

export class UpdateDirectoryUseCase {
  async execute({
    id,
    name,
    content,
    isFolder,
    lastModifier,
    parentId,
  }: IUpdateDirectoryUseCase) {
    return await prisma.directory.update({
      where: {
        id,
      },
      data: {
        name,
        content,
        isFolder,
        lastModifier,
        parentId,
      },
    });
  }
}
