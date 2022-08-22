import { Request, Response } from "express";
import { GetDirectoriesUseCase } from "./GetDirectoriesUseCase";

export class GetDirectoriesController {
    async handle(request: Request, response: Response) {

        const getDirectoriesUseCase = new GetDirectoriesUseCase();
        const result = await getDirectoriesUseCase.execute();

        return response.json(result);
    }
}
