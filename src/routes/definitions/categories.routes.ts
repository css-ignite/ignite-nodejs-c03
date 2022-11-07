import { Router } from "express";
import multer from "multer";

import { CategoriesRepository } from "../../modules/cars/repositories/implementation/CategoriesRepository";
import createCategoryController from "../../modules/cars/useCases/createCategory/index";
import importCategoriesController from "../../modules/cars/useCases/importCategories";
import listCategoriesController from "../../modules/cars/useCases/listCategories/index";
import listCategoryByNameController from "../../modules/cars/useCases/listCategoryByName/index";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController().handle(request, response);
});

categoriesRoutes.get("/:name", (request, response) => {
  return listCategoryByNameController().handle(request, response);
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.post(
  "/import/csv",
  upload.single("file"),
  (request, response) => {
    return importCategoriesController().handle(request, response);
  }
);

export { categoriesRoutes };
