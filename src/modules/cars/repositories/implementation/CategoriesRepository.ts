import { getRepository, Repository } from "typeorm";
import { CategoryModel } from "../../entities/CategoryModel";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoryRepository {

  private repository: Repository<CategoryModel>;

  constructor() {
    try {
      this.repository = getRepository(CategoryModel);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<CategoryModel> {

    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);

    return category;
  }

  async list(): Promise<CategoryModel[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<CategoryModel> {
    const category: CategoryModel = await this.repository.findOne({ name }) as CategoryModel;
    return category;
  }
}

export { CategoriesRepository };
