import { prisma } from "database/prismaClient";

type TDirectory = {
  id?: string;
  name?: string;
  content?: string | null;
  children?: TDirectory[] | null;
  lastModifier?: string;

  updatedAt?: Date;
  createdAt?: Date;
  deletedAt?: Date | null;
  isFolder?: boolean;
  parentId?: string | null;
};

export class GetDirectoriesUseCase {
  async getDirectoriesWithChildrens(
    directories?: TDirectory[]
  ): Promise<TDirectory[] | []> {
    if (!directories) return [];

    return await Promise.all(
      directories
        .filter((dir) => !dir.deletedAt)
        .map(async (dir) => {
          if (dir.isFolder) {
            const dirWithChildren = await prisma.directory.findUnique({
              where: {
                id: dir.id,
              },
              include: {
                children: true,
              },
            });

            return {
              ...dirWithChildren,
              children: await this.getDirectoriesWithChildrens(
                dirWithChildren?.children
              ),
            };
          }

          return dir;
        })
    );
  }

  async execute() {
    const directories = await prisma.directory.findMany({
      where: {
        parentId: null,
        deletedAt: null,
      },
    });

    return directories;
  }
}
