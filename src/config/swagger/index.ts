import swaggerJSDoc from 'swagger-jsdoc';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/controllers/*/index{.ts,.js}'], // files containing
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;