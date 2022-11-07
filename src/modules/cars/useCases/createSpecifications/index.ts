import { SpecificationsRepository } from "../../repositories/implementation/SpecificationsRepository";
import { CreateSpecificationsController } from "./definitons/CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./definitons/CreateSpecificationsUseCase";

export default (): CreateSpecificationsController => {
  const specificationsRepository = new SpecificationsRepository();
  const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationsRepository);
  const createSpecificationsController = new CreateSpecificationsController(createSpecificationsUseCase);

  return createSpecificationsController;
}