const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  origins: [String],
  cookTime: String,
  price: Number,
  favorite: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
