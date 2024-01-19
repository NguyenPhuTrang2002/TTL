const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  img: { type: 'string', default: '' },
  content: { type: 'string', default: '' },
  price: { type: 'string', default: 0 },
  review: { type: 'string', default: '' },
  point: { type: 'string', default: '' }
});

module.exports = mongoose.model('Product', Product);

