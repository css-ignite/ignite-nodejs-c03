import { swaggerApiErrorSchema } from "./schemas/swaggerApiErrorSchema";
import { swaggerApiResponseSchema } from "./schemas/swaggerApiResponseSchema";
import { swaggerCategorySchema } from "./schemas/swaggerCategorySchema";
import { swaggerCreateCategorySchema } from "./schemas/swaggerCreateCategorySchema";
import { swaggerSpecificationsSchema } from "./schemas/swaggerSpecificationsSchema";
import { swaggerCreateSpecificationsSchema } from "./schemas/swaggerCreateSpecificationsSchema";

const swaggerApiDescription = `
  <p style="line-height: 0">API desenvolvida durante as aulas do curso Ignite Trilha NodeJS.\n
  Esta api foi desenvolvida baseada na OpenAPI 3.0 specification. \n
  Você pode conhecer um pouco mais sobre o swagger em [https://swagger.io](https://swagger.io). \n
  Esta API foi desenvolvida durante as aulas do curso Ignite da Rocketseat. Durante as aulas fui
  aprendendo sobre o desenvolvimento de APIs utilizando NodeJS e Typescript e durante seu desenvolvimento
  fui apresentado aso conceitos do SOLID onde pude aplicar alguns de seus conceitos como o Single Responsability Principle,
  Dependency Inversion Principle e o liskov substitution principle.\n
  Trabalhamos também com a organização a estrutura de pastas e arquivos do projeto, e finalizamos com a documentação da API
  utilizando o swagger.\n
  Como conteúdo adicional busquei formas de melorar o processo de documentação e pude aplicar algumas técnicas utilizando o
  wagger-jsdoc e o swagger-autogen para gerar a documentação automatica a API no momento de sua execução o que possibilita manter
  a API sempre atualizada sem muito esforço, apliquei tamtém uma estilizaçao na API com o ReDoc.\n
  </p>
  `;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "RentalX - Api de Integração",
      version: "1.0.0",
      description: swaggerApiDescription,
      contact: {
        email: "claudneysartisessa@gmail.com",
      },
    },
    servers: [
      {
        url: "{protocol}://{baseUrl}:{port}/v1",
        variables: {
          protocol: {
            enum: ["http", "https"],
            default: "http",
          },
          baseUrl: {
            default: "localhost",
            description:
              "This value is assigned by the service provider, in this example `gigantic-server.com`",
          },
          port: {
            enum: ["3333", "80", "8080"],
            default: "3333",
          },
        },
      },
    ],
    components: {
      schemas: {
        Category: swaggerCategorySchema,
        CreateCategory: swaggerCreateCategorySchema,
        Specifications: swaggerSpecificationsSchema,
        CreateSpecifications: swaggerCreateSpecificationsSchema,
        ApiError: swaggerApiErrorSchema,
        ApiResponse: swaggerApiResponseSchema,
      },
    },
  },
  apis: ["**/*.ts"],
};

export { swaggerOptions };
