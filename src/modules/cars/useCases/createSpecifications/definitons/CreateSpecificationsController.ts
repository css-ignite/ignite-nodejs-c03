import { Request, Response } from "express";

import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateSpecificationsController {
  constructor(
    private createSPecificationsUseCase: CreateSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const specifications = this.createSPecificationsUseCase.execute({
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
