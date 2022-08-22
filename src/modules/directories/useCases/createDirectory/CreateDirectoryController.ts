import { Request, Response } from "express";
import { CreateDirectoryUseCase } from "./CreateDirectoryUseCase";

export class CreateDirectoryController {
  async handle(request: Request, response: Response) {
    const { name, content, lastModifier, isFolder, parentId } = request.body;

    const createDirectoryUseCase = new CreateDirectoryUseCase();
    const result = await createDirectoryUseCase.execute({
      name,
      content,
      lastModifier,
      isFolder,
      parentId,
    });

    return response.json(result);
  }
}
