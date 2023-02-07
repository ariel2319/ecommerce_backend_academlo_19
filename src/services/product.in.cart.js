const { product_in_cart } = require('../models')

class ProductInCartServices {

  static async add(cartId, productId, quantity, price, type) {
    try {
      console.log(cartId, productId, quantity, price, type)

      const result = await product_in_cart.create({
        cart_id: cartId, product_id: productId, quantity, price, type
      })
      console.log(result)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async del() {
    try {
      const result = await product_in_cart.delete(
      )
      return result
    } catch (error) {
      throw error
    }
  }

  static async findAllProducts(cart_id) {
    try {
      const result = await product_in_cart.findAll({ where: { cart_id } })
      return result
    } catch (error) {
      throw error
    }
  }
  static async update(cart_id) {
    try {
      const result = await product_in_cart.update({ where: { cart_id } })
      return result
    } catch (error) {
      throw error
    }
  }

  static async deleteAllProducts(cart_id) {
    try {
      const result = await product_in_cart.destroy({ where: { cart_id } })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductInCartServices;
