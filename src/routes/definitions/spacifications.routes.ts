import { Router } from "express";

import { SpecificationsRepository } from "../../modules/cars/repositories/implementation/SpecificationsRepository";
import createSpecificationsController from "../../modules/cars/useCases/createSpecifications/index";
import listSpecificationsController from "../../modules/cars/useCases/listSpecifications/index";
import listSpecificationsByNameController from "../../modules/cars/useCases/listSpecificationsByName/index";

const specificationsRoutes = Router();

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController().handle(request, response);
});

specificationsRoutes.get(
  "/:name",
  (request, response) => {
    return listSpecificationsByNameController().handle(request, response);
  }
);

specificationsRoutes.post(
  "/",
  (request, response) => {
    return createSpecificationsController().handle(request, response);
  }
);

export { specificationsRoutes };
