// const Subcategory = require('../models/subcategoryModel');
// const subcategoryCtrl={}

// // Create a new subcategory
// subcategoryCtrl.createSubcategory = async (req, res) => {
//   try {
//     const subcategory = new Subcategory(req.body);
//     await subcategory.save();
//     res.status(201).json(subcategory);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all subcategories
// subcategoryCtrl.getAllSubcategories = async (req, res) => {
//   try {
//     const subcategories = await Subcategory.find();
//     res.status(200).json(subcategories);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a subcategory
// subcategoryCtrl.updateSubcategory = async (req, res) => {
//   try {
//     const { subcategoryId } = req.params;
//     const updatedSubcategory = await Subcategory.findByIdAndUpdate(subcategoryId, req.body, { new: true });
//     if (!updatedSubcategory) return res.status(404).json({ message: 'Subcategory not found' });
//     res.status(200).json(updatedSubcategory);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a subcategory
// subcategoryCtrl.deleteSubcategory = async (req, res) => {
//   try {
//     const { subcategoryId } = req.params;
//     const subcategory = await Subcategory.findByIdAndDelete(subcategoryId);
//     if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
//     res.status(200).json({ message: 'Subcategory deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };


// module.exports=subcategoryCtrl;


// const Subcategory = require('../models/subcategoryModel');
// const { validationResult } = require('express-validator');

// // Controller object
// const subcategoryCtrl = {};

// // Create a new subcategory
// subcategoryCtrl.addSubcategory = async (req, res) => {
//   // Validate request
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const subcategory = new Subcategory(req.body);
//     await subcategory.save();
//     res.status(201).json(subcategory);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all subcategories
// subcategoryCtrl.getAllSubcategories = async (req, res) => {
//   try {
//     const subcategories = await Subcategory.find();
//     res.status(200).json(subcategories);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a subcategory
// subcategoryCtrl.updateSubcategory = async (req, res) => {
//   // Validate request
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { subcategoryId } = req.params;
//     const updatedSubcategory = await Subcategory.findByIdAndUpdate(subcategoryId, req.body, { new: true });
//     if (!updatedSubcategory) return res.status(404).json({ message: 'Subcategory not found' });
//     res.status(200).json(updatedSubcategory);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a subcategory
// subcategoryCtrl.deleteSubcategory = async (req, res) => {
//   try {
//     const { subcategoryId } = req.params;
//     const subcategory = await Subcategory.findByIdAndDelete(subcategoryId);
//     if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
//     res.status(200).json({ message: 'Subcategory deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };






// // Get a subcategory by ID
// subcategoryCtrl.getSubcategoryById = async (req, res) => {
//   const { id } = req.params; // Extract id from URL parameters

//   try {
//     // Find the subcategory by ID
//     const subcategory = await Subcategory.findById(id);

//     // Check if subcategory was found
//     if (!subcategory) {
//       return res.status(404).json({ error: 'Subcategory not found' });
//     }

//     // Return the subcategory
//     res.status(200).json(subcategory);
//   } catch (err) {
//     // Handle any errors that occur
//     res.status(400).json({ error: err.message });
//   }
// };


// module.exports = subcategoryCtrl;





const Subcategory = require('../models/subcategoryModel');
const { validationResult } = require('express-validator');
const _ = require('lodash'); // Import lodash

// Controller object
const subcategoryCtrl = {};

// Create a new subcategory
subcategoryCtrl.addSubcategory = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Use _.pick to select specific fields from req.body
    const body = _.pick(req.body, [
      'categoryname',
      'image',
      'status',
      'sequence',
      'action'
    ]);

    const subcategory = new Subcategory(body);
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all subcategories
subcategoryCtrl.getAllSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.status(200).json(subcategories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a subcategory
subcategoryCtrl.updateSubcategory = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { subcategoryId } = req.params;

    // Use _.pick to select specific fields from req.body
    const body = _.pick(req.body, [
      'categoryname',
      'image',
      'status',
      'sequence',
      'action'
    ]);

    const updatedSubcategory = await Subcategory.findByIdAndUpdate(subcategoryId, body, { new: true });
    if (!updatedSubcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.status(200).json(updatedSubcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a subcategory
subcategoryCtrl.deleteSubcategory = async (req, res) => {
  try {
    const { subcategoryId } = req.params;
    const subcategory = await Subcategory.findByIdAndDelete(subcategoryId);
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.status(200).json({ message: 'Subcategory deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a subcategory by ID
subcategoryCtrl.getSubcategoryById = async (req, res) => {
  const { id } = req.params; // Extract id from URL parameters

  try {
    // Find the subcategory by ID
    const subcategory = await Subcategory.findById(id);

    // Check if subcategory was found
    if (!subcategory) {
      return res.status(404).json({ error: 'Subcategory not found' });
    }

    // Return the subcategory
    res.status(200).json(subcategory);
  } catch (err) {
    // Handle any errors that occur
    res.status(400).json({ error: err.message });
  }
};

module.exports = subcategoryCtrl;
