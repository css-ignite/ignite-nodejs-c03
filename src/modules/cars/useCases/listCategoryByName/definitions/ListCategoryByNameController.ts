import { Request, Response } from "express";

import { ListCategoryByNameUseCase } from "./ListCategoryByNameUseCase";

class ListCategoryByNameController {
  constructor(private listCategoryByNameUseCase: ListCategoryByNameUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;
    const listOfCategories = await this.listCategoryByNameUseCase.execute({ name });

    if (!listOfCategories) {
      return response.status(404).json({ error: "Category not found!" });
    }

    return response.status(201).json(listOfCategories);
  }
}

export { ListCategoryByNameController };
