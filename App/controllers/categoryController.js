// const Category = require('../models/categoryModel');

// categoryCtrl={}

// // Create a new category
// categoryCtrl.createCategory = async (req, res) => {
//   try {
//     const category = new Category(req.body);
//     await category.save();
//     res.status(201).json(category);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all categories
// categoryCtrl.getAllCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.status(200).json(categories);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a category
// categoryCtrl.updateCategory = async (req, res) => {
//   try {
//     const { categoryId } = req.params;
//     const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, { new: true });
//     if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
//     res.status(200).json(updatedCategory);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a category
// categoryCtrl.deleteCategory = async (req, res) => {
//   try {
//     const { categoryId } = req.params;
//     const category = await Category.findByIdAndDelete(categoryId);
//     if (!category) return res.status(404).json({ message: 'Category not found' });
//     res.status(200).json({ message: 'Category deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };


// module.exports=categoryCtrl;


// const Category = require('../models/categoryModel');
// const { validationResult } = require('express-validator');

// // Controller object
// const categoryCtrl = {};

// // Create a new category
// categoryCtrl.addCategory = async (req, res) => {
//   // Validate request
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const category = new Category(req.body);
//     await category.save();
//     res.status(201).json(category);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all categories
// categoryCtrl.getAllCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.status(200).json(categories);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a category
// categoryCtrl.updateCategory = async (req, res) => {
//   // Validate request
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { categoryId } = req.params;
//     const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, { new: true });
//     if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
//     res.status(200).json(updatedCategory);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a category
// categoryCtrl.deleteCategory = async (req, res) => {
//   try {
//     const { categoryId } = req.params;
//     const category = await Category.findByIdAndDelete(categoryId);
//     if (!category) return res.status(404).json({ message: 'Category not found' });
//     res.status(200).json({ message: 'Category deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };



// // getone category

// // Get a category by ID
// categoryCtrl.getCategoryById = async (req, res) => {
//   const { id } = req.params; // Extract id from URL parameters

//   try {
//     // Find the category by ID
//     const category = await Category.findById(id);

//     // Check if category was found
//     if (!category) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     // Return the category
//     res.status(200).json(category);
//   } catch (err) {
//     // Handle any errors that occur
//     res.status(400).json({ error: err.message });
//   }
// };

// module.exports = categoryCtrl;


const Category = require('../models/categoryModel');
const { validationResult } = require('express-validator');
const _ = require('lodash'); // Import lodash

// Controller object
const categoryCtrl = {};

// Create a new category
categoryCtrl.addCategory = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Use _.pick to select specific fields from req.body
    const body = _.pick(req.body, [
    
      "categoryname",
      
      "status",
      "sequence"
    ]);

    const category = new Category(body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all categories
categoryCtrl.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a category
categoryCtrl.updateCategory = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { categoryId } = req.params;
console.log(categoryId,ok)
    // Use _.pick to select specific fields from req.body
    const body = _.pick(req.body, [
      "categoryname",
      "status",
      "sequence"
    ]);
console.log(body,"body")
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, body, { new: true });
    console.log(updatedCategory,"category")
    if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a category
// categoryCtrl.deleteCategory = async (req, res) => {
//   try {
//     const { categoryId } = req.params;
//     const category = await Category.findByIdAndDelete(categoryId);
//     if (!category) return res.status(404).json({ message: 'Category not found' });
//     res.status(200).json({ message: 'Category deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };


categoryCtrl.deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log(`Attempting to delete category with ID: ${categoryId}`);

    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      console.log('Category not found');
      return res.status(404).json({ message: 'Category not found' });
    }

    console.log('Category deleted successfully:', category);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(400).json({ error: err.message });
  }
};

// Get a category by ID
categoryCtrl.getCategoryById = async (req, res) => {
  const { id } = req.params; // Extract id from URL parameters

  try {
    // Find the category by ID
    const category = await Category.findById(id);

    // Check if category was found
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Return the category
    res.status(200).json(category);
  } catch (err) {
    // Handle any errors that occur
    res.status(400).json({ error: err.message });
  }
};

module.exports = categoryCtrl;
