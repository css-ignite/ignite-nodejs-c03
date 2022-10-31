import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ListCategoryByNameController } from "./definitions/ListCategoryByNameController";
import { ListCategoryByNameUseCase } from "./definitions/ListCategoryByNameUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryByNameUseCase = new ListCategoryByNameUseCase(
  categoriesRepository
);

const listCategoryByNameController = new ListCategoryByNameController(
  listCategoryByNameUseCase
);

export { listCategoryByNameController };
