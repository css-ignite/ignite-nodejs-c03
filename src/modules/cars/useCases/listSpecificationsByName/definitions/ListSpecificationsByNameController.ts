import { Request, Response } from "express";

import { ListSpecificationsByNameUseCase } from "./ListSpecificationsByNameUseCase";

class ListSpecificationsByNameController {
  constructor(
    private listSpecificationsByNameUseCase: ListSpecificationsByNameUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;
    const listOfSpecifications = await this.listSpecificationsByNameUseCase.execute({
      name,
    });

    if (!listOfSpecifications) {
      return response.status(404).json({ error: "Specification not found!" });
    }

    return response.status(201).json(listOfSpecifications);
  }
}

export { ListSpecificationsByNameController };
