const swaggerCategorySchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      example: "0868191f-849a-482c-b0aa-83bd254cdcb5",
    },
    name: {
      type: "string",
      example: "SUV",
    },
    description: {
      type: "string",
      example: "Veículo utilitário esportivo ou Veículo Desportivo",
    },
    created_at: {
      type: "string",
      example: "2021-07-25T00:00:00.000Z",
    },
    updated_at: {
      type: "string",
      example: "2021-07-25T00:00:00.000Z",
    }
  },
  xml: {
    name: "Category",
  },
};

export { swaggerCategorySchema };
