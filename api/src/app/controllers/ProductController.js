const Product = require('../models/Product');

class ProductController {
  getProduct(req, res) {
    Product.find({})
      .then(products => {
        res.status(200).json(products);
      })
  }
}

module.exports = new ProductController();
