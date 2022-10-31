import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
