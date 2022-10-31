import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { CreateCategoryController } from "./definitions/CreateCategoryController";
import { CreateCategoryUseCase } from "./definitions/CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
