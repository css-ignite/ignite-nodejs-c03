import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute() {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationsUseCase };
