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
    shipDate: {
      type: "string",
      format: "date-time",
      example: "2022-10-27T15:00:32.255Z",
    },
  },
  xml: {
    name: "Category",
  },
};

export { swaggerCategorySchema };
