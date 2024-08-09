const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  id: Number,
  categoryname: String,
  image: String,
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  sequence: String
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
