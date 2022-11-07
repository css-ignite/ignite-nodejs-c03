import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ListCategoryByNameController } from "./definitions/ListCategoryByNameController";
import { ListCategoryByNameUseCase } from "./definitions/ListCategoryByNameUseCase";

export default (): ListCategoryByNameController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoryByNameUseCase = new ListCategoryByNameUseCase(categoriesRepository);
  const listCategoryByNameController = new ListCategoryByNameController(listCategoryByNameUseCase);

  return listCategoryByNameController;
}