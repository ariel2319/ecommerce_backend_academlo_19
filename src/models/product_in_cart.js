const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product_in_cart.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schemas:
 *     productInCart:
 *       type: object
 *       properties:
 *         cartId:
 *           type: int
 *           example: 1
 *         productId:
 *           type: int
 *           example: 1
 *         quantity:
 *           type: int
 *           example: 1
 *         price:
 *           type: int
 *           example: 1000
 *         type:
 *           type: enum (pending - incart- purchased)
 *           example: pending
 */ 

class product_in_cart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cart',
          key: 'id'
        }
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'product',
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      type: {
        type: DataTypes.ENUM("pending", "incart", "purchased"),
        allowNull: true,
        defaultValue: "pending"
      }
    }, {
      sequelize,
      tableName: 'product_in_cart',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "product_in_cart_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
}
