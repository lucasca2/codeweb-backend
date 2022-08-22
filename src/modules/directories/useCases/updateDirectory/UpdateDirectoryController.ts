import { Request, Response } from "express";
import { UpdateDirectoryUseCase } from "./UpdateDirectoryUseCase";

export class UpdateDirectoryController {
  async handle(request: Request, response: Response) {
    const { name, content, lastModifier, isFolder, parentId } = request.body;
    const { id } = request.params;

    const updateDirectoryUseCase = new UpdateDirectoryUseCase();
    const result = await updateDirectoryUseCase.execute({
      id: id as string,
      name,
      content,
      lastModifier,
      isFolder,
      parentId,
    });

    return response.json(result);
  }
}
