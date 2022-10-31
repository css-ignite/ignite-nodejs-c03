const swaggerSpecificationsSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      example: "0868191f-849a-482c-b0aa-83bd254cdcb5",
    },
    name: {
      type: "string",
      example: "Airbags",
    },
    description: {
      type: "string",
      example:
        "Os airbags são almofadas de enchimento rápido destinadas a proteger os passageiros em caso de colisão.",
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

export { swaggerSpecificationsSchema };
