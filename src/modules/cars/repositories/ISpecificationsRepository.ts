import { SpecificationsModel } from "../entities/SpecificationsModel";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationsDTO): Promise<SpecificationsModel>;
  list(): Promise<SpecificationsModel[]>;
  findByName(name: string): Promise<SpecificationsModel>;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
