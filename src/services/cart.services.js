const { cart } = require('../models')

class CarServices {
  static async create(id) {
    try {
      const result = await cart.create({ user_id: id })
      return result
    } catch (error) {
      throw error
    }
  }

  static async remove(id) {
    try {
      const result = await cart.delete({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
  static async clear() {
    try {
      const result = await cart.deleteAll()
      return result
    } catch (error) {
      throw error
    }
  }
  static async findByUserId(userId) {
    try {
      const result = await cart.findOne({ where: { user_id: userId } })
      return result
    } catch (error) {
      throw error
    }
  }
  static async find(id) {
    try {
      const result = await cart.findOne({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CarServices;
