const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: Number,
  productname: String,
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category'
 },
  subcategory: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Subcategory' 
},
status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
