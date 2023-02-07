const authRoutes = require('./auth.routes');
const cartRoutes = require('./cart.routes');
const orderRoutes = require('./order.routes');
const productRoutes = require('./product.routes');
const authenticate = require('../middlewares/auth.middleware');

const routerApi = (app) => {
  /* app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/product", authenticate, productRoutes);
  app.use("/api/v1/cart", authenticate, cartRoutes);
  app.use("/api/v1/order", authenticate, orderRoutes); */
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/product", productRoutes);
  app.use("/api/v1/cart", cartRoutes);
  app.use("/api/v1/order", orderRoutes);
}

module.exports = routerApi;