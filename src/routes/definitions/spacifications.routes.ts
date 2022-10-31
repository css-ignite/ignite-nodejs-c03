import { Router } from "express";

import { SpecificationsRepository } from "../../modules/cars/repositories/implementation/SpecificationsRepository";
import { createSpecificationsController } from "../../modules/cars/useCases/createSpecifications/index";
import { listSpecificationsController } from "../../modules/cars/useCases/listSpecifications/index";
import { listSpecificationsByNameController } from "../../modules/cars/useCases/listSpecificationsByName/index";

const specificationsRoutes = Router();
const specificationsRepository = SpecificationsRepository.getInstance();

function specificationsAlreadyExists(request, response, next) {
  const { name } = request.body;

  const specifications = specificationsRepository.findByName(name);

  if (specifications) {
    return response
      .status(400)
      .json({ error: "Specifications already exists!" });
  }

  response.Specifications = specifications;

  return next();
}

function SpecificationsDontExists(request, response, next) {
  const { name } = request.params;

  const Specifications = specificationsRepository.findByName(name);

  if (!Specifications) {
    return response.status(400).json({ error: "Specifications dont exists!" });
  }

  response.Specifications = Specifications;

  return next();
}

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

specificationsRoutes.get(
  "/:name",
  SpecificationsDontExists,
  (request, response) => {
    return listSpecificationsByNameController.handle(request, response);
  }
);

specificationsRoutes.post(
  "/",
  specificationsAlreadyExists,
  (request, response) => {
    return createSpecificationsController.handle(request, response);
  }
);

export { specificationsRoutes };
