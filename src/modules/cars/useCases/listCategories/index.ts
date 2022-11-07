import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ListCategoryController } from "./definitions/ListCategoriesController";
import { ListCategoryUseCase } from "./definitions/ListCategoriesUseCase";

export default (): ListCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
  const listCategoryController = new ListCategoryController(listCategoryUseCase);

  return listCategoryController;
}
