import { prisma } from "database/prismaClient";

export class GetDirectoriesUseCase {
    async execute() {
        return await prisma.directory.findMany();
    }
}
