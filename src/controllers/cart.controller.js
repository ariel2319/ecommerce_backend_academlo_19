const CartServices = require('../services/cart.services')
const ProductInCartServices = require('../services/product.in.cart')
const ProductServices = require('../services/product.services')

const addToCart = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { userId, quantity } = req.body;
    const resultProduct = await ProductServices.findOne(productId);
    const { id: cartId } = await CartServices.findByUserId(userId);
    if (resultProduct) {
      const { price } = resultProduct;
      partialPrice = price * quantity;
      type = 'incart';
      const result = await ProductInCartServices.add(cartId, productId, quantity, partialPrice, type,);

      if (result) {
        const cartOfUser = await CartServices.find(cartId);
        const sumOfTotalPrice = cartOfUser.total_price + partialPrice;
        cartOfUser.update({ total_price: sumOfTotalPrice });

        res.status(201).json({ message: 'product inserted into cart' });
      } else {
        res.status(400).json({ message: 'something wrong' });
      }
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const create = async (req, res) => {
  try {
    const result = await CartServices.create();
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: 'something wrong' });
    }
  } catch (error) {
    res.status(400).json(error.json);
  }
}

const allProductsInCart = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const { id: cartId } = await CartServices.findByUserId(userId);
    const result = await ProductInCartServices.findAllProducts(cartId);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: 'something wrong' });
    }
  } catch (error) {
    res.status(400).json(error.json);
  }
}

module.exports = {
  create,
  allProductsInCart,
  addToCart
}

