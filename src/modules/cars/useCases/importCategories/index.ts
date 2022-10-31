import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ImportCategoryController } from "./definitions/ImportCategoriesController";
import { ImportCategoriesUseCase } from "./definitions/ImportCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository
);

const importCategoriesController = new ImportCategoryController(
  importCategoriesUseCase
);

export { importCategoriesController };
