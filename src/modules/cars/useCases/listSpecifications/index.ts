import { SpecificationsRepository } from "../../repositories/implementation/SpecificationsRepository";
import { ListSpecificationsController } from "./definitions/ListSpecificationsController";
import { ListSpecificationsUseCase } from "./definitions/ListSpecificationsUseCase";

export default (): ListSpecificationsController => {
  const specificationsRepository = new SpecificationsRepository();
  const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);
  const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

  return listSpecificationsController;
}