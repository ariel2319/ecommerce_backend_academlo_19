const { order } = require('../models')
const { product_in_order: productInOrder } = require('../models')

class OrderServices {
  static async create(userId, totalPrice) {
    try {
      const result = await order.create({
        user_id: userId,
        total_price: totalPrice,
      })
      console.log(result)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async findOrderByUser(userId) {
    try {
      const result = await order.find({ where: { user_id: userId } })
      return result
    } catch (error) {
      throw error
    }
  }

  static async findOrderByUserWithModels(userId) {
    try {
      const result = await order.findAll({
        where: { user_id: userId },
        include: { model: productInOrder, as: 'product_in_orders' },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = OrderServices;
