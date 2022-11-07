import { Request, Response } from "express";

import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoriesUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request as any;

    const listOfCategories = await this.importCategoryUseCase.execute(file);

    return response.status(200).json({ message: "Importing categories!" });
  }
}

export { ImportCategoryController };
