import { Router } from "express";
import multer from "multer";

import { CategoriesRepository } from "../../modules/cars/repositories/implementation/CategoriesRepository";
import { createCategoryController } from "../../modules/cars/useCases/createCategory/index";
import { importCategoriesController } from "../../modules/cars/useCases/importCategories";
import { listCategoriesController } from "../../modules/cars/useCases/listCategories/index";
import { listCategoryByNameController } from "../../modules/cars/useCases/listCategoryByName/index";

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

const upload = multer({
  dest: "./tmp",
});

function catecoryAlreadyExists(request, response, next) {
  const { name } = request.body;

  const category = categoriesRepository.findByName(name);

  if (category) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  response.category = category;

  return next();
}

function categoryDontExists(request, response, next) {
  const { name } = request.params;

  const category = categoriesRepository.findByName(name);

  if (!category) {
    return response.status(400).json({ error: "Category dont exists!" });
  }

  response.category = category;

  return next();
}

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.get("/:name", categoryDontExists, (request, response) => {
  return listCategoryByNameController.handle(request, response);
});

categoriesRoutes.post("/", catecoryAlreadyExists, (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post(
  "/import/csv",
  upload.single("file"),
  (request, response) => {
    return importCategoriesController.handle(request, response);
  }
);

export { categoriesRoutes };
