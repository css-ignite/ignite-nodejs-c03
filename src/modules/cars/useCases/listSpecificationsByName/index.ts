import { SpecificationsRepository } from "../../repositories/implementation/SpecificationsRepository";
import { ListSpecificationsByNameController } from "./definitions/ListSpecificationsByNameController";
import { ListSpecificationsByNameUseCase } from "./definitions/ListSpecificationsByNameUseCase";

export default (): ListSpecificationsByNameController => {
  const specificationsRepository = new SpecificationsRepository();
  const listSpecificationsByNameUseCase = new ListSpecificationsByNameUseCase(specificationsRepository);
  const listSpecificationsByNameController = new ListSpecificationsByNameController(listSpecificationsByNameUseCase);

  return listSpecificationsByNameController;
}