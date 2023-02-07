const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schemas:
 *     order:
 *       type: object
 *       properties:
 *         userId:
 *           type: int
 *           example: 1
 *     getAllOrders:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 1
 *         totalPrice:
 *           type: int
 *           example: 1000
 *         userId:
 *           type: int
 *           example: 1
 *         type:
 *           type: string
 *           example: pending
 *         productInOrders:
 *           type: object
 *           properties:
 *             id:
 *               type: int
 *               example: 1
 *             orderId:
 *               type: int
 *               example: 1
 *             productId:
 *               type: int
 *               example: 1
 *             quantity:         
 *               type: int
 *               example: 1
 */

class order extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      type: {
        type: DataTypes.ENUM("pending", "incart", "purchased"),
        allowNull: true,
        defaultValue: "pending"
      }
    }, {
      sequelize,
      tableName: 'order',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "order_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
}
