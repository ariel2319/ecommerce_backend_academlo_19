// leemos el token valido. y luego autorizamos o no acceder a una ruta.
const jwt = require('jsonwebtoken')
require('dotenv').config();

const authenticate = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace('Bearer ', '')
  const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithm: 'HS512' },
    (error, decoded) => {
      if (error) {
        res.status(400).json({ message: 'invalid token' })
      } else {
        next()
      }
    },
  )
}

module.exports = authenticate;
