import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    try {
      return this.specificationsRepository.create({ name, description });
    } catch (error) {
      throw new Error("Create spacification failed!");
    }
  }
}

export { CreateSpecificationsUseCase };
