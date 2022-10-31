import { SpecificationsModel } from "../models/SpecificationsModel";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): SpecificationsModel;
  list(): SpecificationsModel[];
  create({ name, description }: ICreateSpecificationsDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
