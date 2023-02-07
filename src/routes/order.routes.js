const { Router } = require("express")
const { order, getAllOrders } = require("../controllers/order.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const router = Router()

/**
 * @openapi
 * /api/v1/order:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: order all products inside cart
 *     tags: [Orders]
 *     requestBody:
 *       description: UserId Required 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'
 *     responses:
 *        200:
 *          description: All Products in Order
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: order ID:2 successfully created!
 *        400:
 *          description: get error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Order not finded
 * /api/v1/order/{id}:
 *   get:
 *     summary: Get all orders created by user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: UserId 
 *     tags: [Orders]
 *     responses:
 *        200:
 *          description: All products
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/getAllOrders'
 *        400:
 *          description: get error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Error
 */

router.post("/", order)
router.get("/:id", getAllOrders)
module.exports = router
