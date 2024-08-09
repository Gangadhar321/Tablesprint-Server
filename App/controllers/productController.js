// const Product = require('../models/productModel');

// const productCtrl={}

// // Create a new product
// productCtrl.createProduct = async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all products
// productCtrl.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a product
// productCtrl.updateProduct = async (req, res) => {
//   try {
//     const { productId } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
//     if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a product
// productCtrl.deleteProduct = async (req, res) => {
//   try {
//     const { productId } = req.params;
//     const product = await Product.findByIdAndDelete(productId);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };



// module.exports=productCtrl;


// const Product = require('../models/productModel');
// const { validationResult } = require('express-validator');
// const _ = require('lodash'); // Import lodash

// // Controller object
// const productCtrl = {};

// // Create a new product
// productCtrl.addProduct = async (req, res) => {
//   // Validate request
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all products
// productCtrl.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a product
// productCtrl.updateProduct = async (req, res) => {
//   // Validate request
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { productId } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
//     if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a product
// productCtrl.deleteProduct = async (req, res) => {
//   try {
//     const { productId } = req.params;
//     const product = await Product.findByIdAndDelete(productId);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };



// // Get a product by ID
// productCtrl.getProductById = async (req, res) => {
//   const { id } = req.params; // Extract id from URL parameters

//   try {
//     // Find the product by ID
//     const product = await Product.findById(id);

//     // Check if product was found
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     // Return the found product
//     res.status(200).json(product);
//   } catch (err) {
//     // Handle any errors that occur
//     res.status(400).json({ error: err.message });
//   }
// };


// module.exports = productCtrl;




const Product = require('../models/productModel');
const { validationResult } = require('express-validator');
const _ = require('lodash'); // Import lodash

// Controller object
const productCtrl = {};

// Create a new product
productCtrl.addProduct = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Use _.pick to select specific fields from req.body

    const body = _.pick(req.body, [
      'productname',
      'category',
      'subcategory',
      'status'
    ]);
console.log(body,"body")
    const product = new Product(body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all products
productCtrl.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a product
productCtrl.updateProduct = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { productId } = req.params;
console.log(req.params,"ok")
    // Use _.pick to select specific fields from req.body
    const body = _.pick(req.body, [
      'productname',
      'category',
      'subcategory',
      'status'
    ]);
console.log(body,"body not")
    const updatedProduct = await Product.findByIdAndUpdate(productId, body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a product
productCtrl.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a product by ID
productCtrl.getProductById = async (req, res) => {
  const { id } = req.params; // Extract id from URL parameters

  try {
    // Find the product by ID
    const product = await Product.findById(id);

    // Check if product was found
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Return the found product
    res.status(200).json(product);
  } catch (err) {
    // Handle any errors that occur
    res.status(400).json({ error: err.message });
  }
};

module.exports = productCtrl;
