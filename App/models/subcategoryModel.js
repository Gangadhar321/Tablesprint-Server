const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
  id: Number,
  categoryname: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: String,
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  sequence: String,
  action: String
}, { timestamps: true });

module.exports = mongoose.model('Subcategory', SubcategorySchema);
