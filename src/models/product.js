const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Samsung S22
 *         price:
 *           type: int
 *           example: 900
 *         available_qty:
 *           type: int
 *           example: 18
 *         type:
 *           type: enum (pending - incart- purchased)
 *           example: incart
 *         userId:
 *           type: int
 *           example: 1
 *         productImg:
 *           type: string
 *           example: URL
 *     allproducts:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Samsung S22
 *         price:
 *           type: int
 *           example: 900
 *         available_qty:
 *           type: int
 *           example: 10
 *         type:
 *           type: enum (pending - incart- purchased)
 *           example: pending
 *         userId:
 *           type: int
 *           example: 2
 *         productImg:
 *           type: string
 *           example: samsung.com/samsung-s22.jpg
 */

class product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: "product_name_key"
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      available_qty: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      type: {
        type: DataTypes.ENUM("pending", "incart", "purchased"),
        allowNull: true,
        defaultValue: "pending"
      },
      productImg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'product',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "product_name_key",
          unique: true,
          fields: [
            { name: "name" },
          ]
        },
        {
          name: "product_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
}
