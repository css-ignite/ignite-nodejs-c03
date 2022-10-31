import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["dist/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles);
