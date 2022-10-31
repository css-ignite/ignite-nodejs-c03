import { SpecificationsRepository } from "../../repositories/implementation/SpecificationsRepository";
import { CreateSpecificationsController } from "./definitons/CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./definitons/CreateSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationsUseCase = new CreateSpecificationsUseCase(
  specificationsRepository
);

const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationsUseCase
);

export { createSpecificationsController };
