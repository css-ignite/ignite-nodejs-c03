import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const listOfCategories = await this.listCategoryUseCase.execute();

    return response.status(201).json(listOfCategories);
  }
}

export { ListCategoryController };
