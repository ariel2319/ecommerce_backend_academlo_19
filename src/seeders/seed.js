const db = require('../utils/database');
const initModels = require('../models/init-models');
const models = require('../models');

initModels(db);
//* no usar je

const users = [
  {
    username: "ariel",
    email: "ariel@gmail.com",
    password: "12345"
  },
  {
    username: "alejandro",
    email: "alejandro@gmail.com",
    password: "123456"
  },
  {
    username: "yesica",
    email: "yesica@gmail.com",
    password: "11345"
  },
  {
    username: "ribarole",
    email: "ribarole@gmail.com",
    password: "12345"
  }
];

const product = [
  {
    name: "Samsung S22",
    price: 900,
    available_qty: 18,
    type: "purchased",
    userId: 1
  },
  {
    name: "Huawei POCO5",
    price: 1020,
    available_qty: 14,
    type: "incart",
    userId: 2
  },
  {
    name: "Samsung S20",
    price: 700,
    available_qty: 21,
    type: "incart",
    userId: 3
  },
  {
    name: "MacBook Air 2022",
    price: 1100,
    available_qty: 11,
    type: "pending",
    userId: 3
  },
  {
    name: "Logi G903",
    price: 250,
    available_qty: 13,
    type: "pending",
    userId: 4
  },
  ,
  {
    name: "Lenovo Legion V2",
    price: 1500,
    available_qty: 20,
    type: "pending",
    userId: 2
  },

];

const order = [
  {
    totalPrice: 0,
    userId: 1,
    type: "pending",
  },
  {
    totalPrice: 0,
    userId: 2,
    type: "pending",
  },
  {
    totalPrice: 0,
    userId: 3,
    type: "pending",
  },
];

const cart = [
  {
    total_price: 0,
    user_id: 1
  },
  {
    total_price: 0,
    user_id: 2
  }, {
    total_price: 0,
    user_id: 3
  },
  {
    total_price: 0,
    user_id: 4
  }
];

const productInCart = [
  {
    cart_id: 1,
    product_id: 4,
    quantity: 1,
    price: 0,
    type: "pending"
  },
  {
    cart_id: 2,
    product_id: 5,
    quantity: 1,
    price: 0,
    type: "pending"
  }
];

const productInOrder = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 1,
    price: 0,
    type: "pending"
  },
  {
    order_id: 2,
    product_id: 2,
    quantity: 1,
    price: 0,
    type: "pending"
  },
  {
    order_id: 3,
    product_id: 3,
    quantity: 1,
    price: 0,
    type: "pending"
  },

];

db.sync({ force: true })
  .then(() => {
    console.log('Iniciando con el sembradio malicioso con Users..');
    users.forEach((user) => models.users.create(user));

    setTimeout(() => {
      console.log('products...');
      product.forEach((produ) => models.product.create(produ));
    }, 100);

    setTimeout(() => {
      console.log('orders...');
      order.forEach((sOrder) => models.order.create(sOrder));
    }, 200);

    setTimeout(() => {
      console.log('carts...');
      cart.forEach((sCart) => models.cart.create(sCart));
    }, 300);

    setTimeout(() => {
      console.log('products In Cart...');
      productInCart.forEach((prodCart) => models.productInCart.create(prodCart));
    }, 400);

    setTimeout(() => {
      console.log('products In Order...');
      productInOrder.forEach((prodOrder) => models.productInOrder.create(prodOrder));
    }, 500);

  })