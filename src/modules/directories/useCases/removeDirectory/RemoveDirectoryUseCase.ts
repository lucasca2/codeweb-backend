import { prisma } from "database/prismaClient";

interface IRemoveDirectoryUseCase {
  id: string;
}

export class RemoveDirectoryUseCase {
  async execute({ id }: IRemoveDirectoryUseCase) {
    return await prisma.directory.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
