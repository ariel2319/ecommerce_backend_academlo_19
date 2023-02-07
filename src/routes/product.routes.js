const { Router } = require("express")
const { create, allProducts } = require("../controllers/product.controller")
const router = Router()


/**
 * @openapi
 * /api/v1/product/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: Required fields to create a new product
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product'
 *     responses:
 *        201:
 *          description: Created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Product successfully created!
 *        400:
 *          description: Validation error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Error
 * /api/v1/product:
 *   get:
 *     summary: Get products
 *     tags: [Products]
 *     responses:
 *        200:
 *          description: All products
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/allproducts'
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

router.post("/create", create)
router.get("/", allProducts)

module.exports = router
