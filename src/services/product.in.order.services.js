const { product_in_order } = require('../models')

class ProductInOrderServices {
  static async add(orderId, productId, quantity, price, type) {
    try {
      console.log(orderId, productId, quantity, price, type)

      const result = await product_in_order.create({
        order_id: orderId, product_id: productId, quantity, price, type
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
      const result = await product_in_order.delete(
      )
      return result
    } catch (error) {
      throw error
    }
  }



  static async update(order_id) {
    try {
      const result = await product_in_order.update({ where: { order_id } })
      return result
    } catch (error) {
      throw error
    }
  }


}

module.exports = ProductInOrderServices
