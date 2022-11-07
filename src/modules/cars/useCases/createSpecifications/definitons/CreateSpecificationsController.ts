import { Request, Response } from "express";

import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateSpecificationsController {
  constructor(
    private createSPecificationsUseCase: CreateSpecificationsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const specifications = await this.createSPecificationsUseCase.execute({
      name,
      description,
    });

    return response.status(201).json({
      message: "Specification created successfully!",
      data: specifications,
    });
  }
}

export { CreateSpecificationsController };
