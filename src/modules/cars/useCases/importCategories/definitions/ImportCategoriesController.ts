import { Request, Response } from "express";

import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    const listOfCategories = this.importCategoryUseCase.execute(file);

    return response.status(200).json(listOfCategories);
  }
}

export { ImportCategoryController };
