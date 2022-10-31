import { Request, Response } from "express";

import { ListSpecificationsByNameUseCase } from "./ListSpecificationsByNameUseCase";

class ListSpecificationsByNameController {
  constructor(
    private listSpecificationsByNameUseCase: ListSpecificationsByNameUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.params;
    const listOfSpecifications = this.listSpecificationsByNameUseCase.execute({
      name,
    });

    return response.status(201).json(listOfSpecifications);
  }
}

export { ListSpecificationsByNameController };
