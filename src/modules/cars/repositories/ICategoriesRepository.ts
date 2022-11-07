import { CategoryModel } from "../entities/CategoryModel";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<CategoryModel>;
  list(): Promise<CategoryModel[]>;
  findByName(name: string): Promise<CategoryModel>;
}

export { ICategoryRepository, ICreateCategoryDTO };
