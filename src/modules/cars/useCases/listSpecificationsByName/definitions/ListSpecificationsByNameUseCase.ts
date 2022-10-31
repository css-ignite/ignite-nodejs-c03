import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
}

class ListSpecificationsByNameUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name }: IRequest) {
    const specifications = this.specificationsRepository.findByName(name);
    return specifications;
  }
}

export { ListSpecificationsByNameUseCase };
