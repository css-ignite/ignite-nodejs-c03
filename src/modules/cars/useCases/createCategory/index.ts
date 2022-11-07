import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { CreateCategoryController } from "./definitions/CreateCategoryController";
import { CreateCategoryUseCase } from "./definitions/CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
}
