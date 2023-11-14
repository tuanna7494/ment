import config from '../../config/config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API documentation',
    version: '1.0.0',
    description: 'This is a node express mongoose boilerplate in typescript'
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Development Server'
    }
  ]
};

export default swaggerDefinition;
