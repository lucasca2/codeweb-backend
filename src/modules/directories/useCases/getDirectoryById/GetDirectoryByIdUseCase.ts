import { prisma } from "database/prismaClient";

interface IGetDirectoryByIdUseCase {
  id: string;
}

export class GetDirectoryByIdUseCase {
  async execute({ id }: IGetDirectoryByIdUseCase) {
    return await prisma.directory.findUnique({
      where: {
        id,
      },
      include: {
        children: true,
      },
    });
  }
}
