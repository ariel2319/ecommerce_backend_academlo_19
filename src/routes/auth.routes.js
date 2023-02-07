const { Router } = require("express")
const { register, login, reset, confirm } = require("../controllers/auth.controller")
const router = Router()

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Create a new user into app -
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
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
 *                    example: user created in the documentation!
 *        400:
 *          description: Validation error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Validation error!
 * /api/v1/auth/login:
 *   post:
 *     summary: Login an existing user into the app
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to login a existing user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *        200:
 *          description: Accepted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/loginResponse'
 *        400:
 *          description: not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: User not found / Something wrong / Not password or email provided
 */

router.post("/register", register)
router.post("/login", login)

module.exports = router
