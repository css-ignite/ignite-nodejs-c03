import { Router } from "express";

import { categoriesRoutes } from "./definitions/categories.routes";
import { specificationsRoutes } from "./definitions/spacifications.routes";
import { swaggerRoutes } from "./definitions/swagger.routes";

const router = Router();

router.use("/categories", categoriesRoutes);

router.use("/specifications", specificationsRoutes);

router.use(swaggerRoutes);

export { router };
