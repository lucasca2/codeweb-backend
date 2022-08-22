import { prisma } from "database/prismaClient";

interface ICreateDirectory {
  name: string;
  content?: string;
  isFolder: boolean;
  lastModifier: string;
  parentId: string;
}

export class CreateDirectoryUseCase {
  async execute({
    name,
    content,
    isFolder,
    lastModifier,
    parentId,
  }: ICreateDirectory) {
    // const directoryExist = await prisma.directory.findFirst({
    //   // where: {
    //   //     email: {
    //   //         equals: email,
    //   //         mode: "insensitive",
    //   //     },
    //   // },
    // });
    //
    // if (directoryExist) {
    //   throw new Error("User already exists");
    // }

    return await prisma.directory.create({
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
