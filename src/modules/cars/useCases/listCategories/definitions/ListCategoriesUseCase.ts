import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) { }

  async execute() {
    return await this.categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
