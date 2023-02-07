const { product } = require('../models')
const { Op } = require('sequelize')

class ProductServices {
  static async create(name, price, availableQty, type, userId, image) {
    try {
      const result = await product.create({ name, price, available_qty: availableQty, type, user_id: userId, image });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async allProducts() {
    try {
      const result = await product.findAll({
        where: { available_qty: { [Op.gt]: 1 } },
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async findOne(id) {
    try {
      const result = await product.findOne({
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async changeQuantity(id, quantityToSubtract) {
    try {
      const productToChangeQuantity = await product.findOne({ where: { id } })

      const availableQtyChanged =
        productToChangeQuantity.available_qty - quantityToSubtract
      await productToChangeQuantity.update({
        available_qty: availableQtyChanged,
      })
      return productToChangeQuantity;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
