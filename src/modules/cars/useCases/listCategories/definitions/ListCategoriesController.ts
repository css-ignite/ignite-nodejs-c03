import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const listOfCategories = this.listCategoryUseCase.execute();

    return response.status(201).json(listOfCategories);
  }
}

export { ListCategoryController };
