import { Request, Response } from "express";
import { RemoveDirectoryUseCase } from "./RemoveDirectoryUseCase";

export class RemoveDirectoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const removeDirectoryUseCase = new RemoveDirectoryUseCase();
    const result = await removeDirectoryUseCase.execute({
      id: id as string,
    });

    return response.json(result);
  }
}
