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
    created_at: {
      type: "string",
      example: "2021-07-30T00:00:00.000Z",
    },
    updated_at: {
      type: "string",
      example: "2021-07-30T00:00:00.000Z",
    }
  },
  xml: {
    name: "Specifications",
  },
};

export { swaggerSpecificationsSchema };
