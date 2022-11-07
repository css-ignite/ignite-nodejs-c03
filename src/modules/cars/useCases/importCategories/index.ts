import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ImportCategoryController } from "./definitions/ImportCategoriesController";
import { ImportCategoriesUseCase } from "./definitions/ImportCategoriesUseCase";

export default (): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository);
  const importCategoryController = new ImportCategoryController(importCategoriesUseCase);

  return importCategoryController;
}
