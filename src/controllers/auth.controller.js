const AuthServices = require('../services/auth.services')
const CartServices = require('../services/cart.services')
const transporter = require('../utils/mailer')
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await AuthServices.register(email, password);
    if (result) {
      const { id } = result;
      const resultCar = await CartServices.create(id);

      if (resultCar) {
        await transporter.sendMail({
          to: result.email,
          from: process.env.GOOGLE_MAIL,
          subject: 'Email confirmation',
          html: "<h1>Bienvenido a tienda La Chicha</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blanc'> enlace </a>",
        });
        res.status(201).json({ message: 'User Created' })
      } else {
        res.status(400).json({ message: 'Something wrong' })
      }
    } else {
      res.status(400).json({ message: 'Something wrong' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "missing data..",
        message: "not email provided.."
      });
    };
    if (!password) {
      return res.status(400).json({
        error: "missing data..",
        message: "not password provided.."
      })
    };
    const result = await AuthServices.login({ password, email });
    if (result.isValid) {
      const { username, id, email } = result.result;
      let userData = { username, id, email };

      const token = AuthServices.genToken(userData);
      userData.token = token;
      //console.log(userData.token, 'token');
      res.status(200).json(userData);
    } else {
      res.status(400).json({ message: 'user not found' })
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  register,
  login
}
