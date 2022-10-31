import { SpecificationsRepository } from "../../repositories/implementation/SpecificationsRepository";
import { ListSpecificationsByNameController } from "./definitions/ListSpecificationsByNameController";
import { ListSpecificationsByNameUseCase } from "./definitions/ListSpecificationsByNameUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationsByNameUseCase = new ListSpecificationsByNameUseCase(
  specificationsRepository
);

const listSpecificationsByNameController =
  new ListSpecificationsByNameController(listSpecificationsByNameUseCase);

export { listSpecificationsByNameController };
