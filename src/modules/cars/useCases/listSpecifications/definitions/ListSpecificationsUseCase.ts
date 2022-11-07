import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  async execute() {
    return await this.specificationsRepository.list();
  }
}

export { ListSpecificationsUseCase };
