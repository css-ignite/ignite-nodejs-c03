const swaggerCreateCategorySchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "SUV",
    },
    description: {
      type: "string",
      example: "Veículo utilitário esportivo ou Veículo Desportivo",
    },
  },
  xml: {
    name: "CreateCategory",
  },
};

export { swaggerCreateCategorySchema };
