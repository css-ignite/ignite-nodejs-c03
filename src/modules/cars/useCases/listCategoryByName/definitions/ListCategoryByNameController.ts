import { Request, Response } from "express";

import { ListCategoryByNameUseCase } from "./ListCategoryByNameUseCase";

class ListCategoryByNameController {
  constructor(private listCategoryByNameUseCase: ListCategoryByNameUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.params;
    const listOfCategories = this.listCategoryByNameUseCase.execute({ name });

    return response.status(201).json(listOfCategories);
  }
}

export { ListCategoryByNameController };
