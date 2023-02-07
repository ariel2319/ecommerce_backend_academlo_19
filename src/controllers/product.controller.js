const ProductServices = require('../services/product.services')


const create = async (req, res) => {
  try {
    const { name, price, available_qty, type, userId, productImg } = req.body;
    const result = await ProductServices.create(name, price, available_qty, type, userId, productImg)
    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).json({ message: 'Something wrong' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const allProducts = async (req, res) => {
  try {
    const result = await ProductServices.allProducts()
    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).json({ message: 'something wrong' })
    }
  } catch (error) {
    res.status(400).json(error.json);
  }
}

module.exports = {
  create,
  allProducts
}
