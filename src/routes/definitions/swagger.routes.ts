import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { swaggerOptions } from "../../swagger/swaggerOptions";

const swaggerRoutes = Router();

const swaggerDocs = swaggerJsDoc(swaggerOptions);

swaggerRoutes.use(
  "/swagger/docs/default",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

swaggerRoutes.use("/swagger", swaggerUi.serve);

swaggerRoutes.get(
  "/swagger",
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "/swagger/swagger.json",
    },
  })
);

swaggerRoutes.get("/swagger/swagger.json", (req, res) => res.json(swaggerDocs));

swaggerRoutes.get("/swagger/docs", (request, response) => {
  const { protocol, baseUrl } = request;
  const fullUrl = `${protocol}://${request.get("host")}${baseUrl}`;

  const htmlFile = `
    <body>
      <div id="redoc-container"></div>
      <script src="https://cdn.jsdelivr.net/npm/redoc@2.0.0-rc.55/bundles/redoc.standalone.min.js"> </script>
      <script src="https://cdn.jsdelivr.net/gh/wll8/redoc-try@1.4.1/dist/try.js"></script>
      <script>
        initTry({
          openApi:'${fullUrl}/swagger/swagger.json'
        });
      </script>
    </body>
  `;

  response.send(htmlFile);
});

export { swaggerRoutes };
