import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
}

class ListSpecificationsByNameUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  async execute({ name }: IRequest) {
    const specifications = await this.specificationsRepository.findByName(name);
    return specifications;
  }
}

export { ListSpecificationsByNameUseCase };
