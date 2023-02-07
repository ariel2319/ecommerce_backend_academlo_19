const AuthServices = require('../services/auth.services')
const CartServices = require('../services/cart.services')
const OrderServices = require('../services/order.services')
const ProductInCartServices = require('../services/product.in.cart')
const ProductInOrderServices = require('../services/product.in.order.services')
const ProductServices = require('../services/product.services')

const order = async (req, res) => {
  try {
    const { userId } = req.body
    const { total_price, id: cartId } = await CartServices.findByUserId(userId)
    const { id: orderId } = await OrderServices.create(userId, total_price);
    const allProductDataInCart = await ProductInCartServices.findAllProducts(cartId);
    
    allProductDataInCart.forEach(async (eachProduct) => {
      const resultOfAddProducts = await ProductInOrderServices.add(orderId, eachProduct.product_id, eachProduct.quantity, eachProduct.price, 'purchased');
      const resultOfChangeQuantity = await ProductServices.changeQuantity(eachProduct.product_id, eachProduct.quantity);
    })

    await ProductInCartServices.deleteAllProducts(cartId)
    const cartOfUser = await CartServices.findByUserId(userId)

    cartOfUser.update({ total_price: '0' })

    if (allProductDataInCart) {
      const result = await AuthServices.findOne(userId)
      res.status(201).json({ message: `order Id:${orderId} created` })
    } else {
      res.status(400).json({ message: 'something wrong' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getAllOrders = async (req, res) => {
  try {
    const { id: userId } = req.params
    const result = await OrderServices.findOrderByUserWithModels(userId)
    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).json({ message: 'something wrong' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  order,
  getAllOrders
}
