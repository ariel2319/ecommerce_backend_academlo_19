const { users } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AuthServices {

  static async register(email, password) {
    try {
      const result = await users.create({ email, password })
      return result
    } catch (error) {
      throw error
    }
  }

  static async login(data) {
    try {
      const { password, email } = data
      const result = await users.findOne({ where: { email } })
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, result } : { isValid }
      }
      return { isValid: false }
    } catch (error) {
      throw error;
    }
  }

  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '1h',
        algorithm: 'HS512',
      })
      return token;
    } catch (error) {
      throw error;
    }
  }

  static async findOne(id) {
    try {
      const result = await users.findOne({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = AuthServices;
