const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()

const options = {
  apis: [
    './src/routes/auth.routes.js',
    './src/models/users.js',
    './src/models/product.js',
    './src/models/order.js',
    './src/routes/order.routes.js',
    './src/routes/cart.routes.js',
    './src/models/cart.js',
    './src/routes/product.routes.js',
    './src/models/product_in_cart.js',
  ],
  definition: {
    openapi: '3.0.0',
    info: {
      title: "E-Commerce nodeJS - Ariel Maldonado",
      version: '0.0.7',
      description: "API para E-commerce de Acedemlo en Gen19"
    },
  },
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader({ "Content-Type": "application/json" });
    res.send(swaggerSpec);
  });
  console.log(`Doc V1 disponible en ${process.env.URL}:${port}/api/v1/docs `)
}

module.exports = swaggerDocs;
