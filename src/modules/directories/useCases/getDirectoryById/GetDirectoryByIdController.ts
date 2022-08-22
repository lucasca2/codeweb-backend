import { Request, Response } from "express";
import { GetDirectoryByIdUseCase } from "./GetDirectoryByIdUseCase";

export class GetDirectoryByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getDirectoryByIdUseCase = new GetDirectoryByIdUseCase();
    const result = await getDirectoryByIdUseCase.execute({ id: id as string });

    return response.json(result);
  }
}
