const { Router } = require("express");
const { addToCart, allProductsInCart } = require("../controllers/cart.controller");
const router = Router();

/**
 * @openapi
 * /api/v1/cart/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add products to your cart
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id's product to insert
 *     tags: [Cart]
 *     requestBody:
 *       description: Required fields to add a product in a cart
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/cart'
 *     responses:
 *        201:
 *          description: Product is successfully added
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Product successfully added into cart!
 *        400:
 *          description: Validation error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Product not added
 * /api/v1/cart/allproducts/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products in a Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the User
 *     tags: [Cart]
 *     responses:
 *        200:
 *          description: All Products in Cart
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/productInCart'
 *        400:
 *          description: get error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Error when trying to fetch the data
 */

router.post("/:id", addToCart)
router.get("/allproducts/:id", allProductsInCart)

module.exports = router
