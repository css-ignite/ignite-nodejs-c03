import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
}

class ListCategoryByNameUseCase {
  constructor(private categoriesRepository: ICategoryRepository) { }

  async execute({ name }: IRequest) {
    const category = await this.categoriesRepository.findByName(name);
    return category;
  }
}

export { ListCategoryByNameUseCase };
