const swaggerCreateSpecificationsSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Airbags",
    },
    description: {
      type: "string",
      example:
        "Os airbags são almofadas de enchimento rápido destinadas a proteger os passageiros em caso de colisão.",
    },
  },
  xml: {
    name: "CreateSpecifications",
  },
};

export { swaggerCreateSpecificationsSchema };
