import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest) {
    try {
      return this.categoriesRepository.create({ name, description });
    } catch (error) {
      throw new Error("Create category failed!");
    }
  }
}

export { CreateCategoryUseCase };
