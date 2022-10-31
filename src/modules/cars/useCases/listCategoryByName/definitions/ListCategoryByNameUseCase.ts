import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
}

class ListCategoryByNameUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name }: IRequest) {
    const category = this.categoriesRepository.findByName(name);
    return category;
  }
}

export { ListCategoryByNameUseCase };
