// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./configuration/database');

// // Import controllers and validations
// const userCtrl = require('./App/controllers/userController');
// const categoryCtrl = require('./App/controllers/categoryController');
// const subcategoryCtrl = require('./App/controllers/subcategoryController');
// const productCtrl = require('./App/controllers/productController');


// const {  userValidationSchema,
//     userLoginValidationSchema,
//     userUpdateSchema} = require('./App/validations/userValidations');
// const { createCategoryValidationSchema,updateCategoryValidationSchema } = require('./App/validations/categoryValidations');
// const { createSubcategoryValidationSchema, updateSubcategoryValidationSchema } = require('./App/validations/subcategoryValidations');
// const { createProductValidationSchema, updateProductValidationSchema } = require('./App/validations/productValidations');


// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to database
// connectDB();

// // User Routes
// app.post('/api/users', userValidationSchema, userCtrl.register);
// app.post('/api/userlogin', userLoginValidationSchema, userCtrl.loginUser);
// app.get('/api/users', userCtrl.getAllUsers);
// app.get('/api/users/:id', userCtrl.getUserById);
// app.put('/api/users/:id', userUpdateSchema, userCtrl.updateUser);
// app.delete('/api/users/:id', userCtrl.deleteUser);

// // Category Routes
// app.post('/api/addcategories',createCategoryValidationSchema, categoryCtrl.addCategory);
// app.get('/api/allcategories', categoryCtrl.getAllCategories);
// app.get('/api/categories/:id', categoryCtrl.getCategoryById);
// app.put('/api/categories/:id', updateCategoryValidationSchema, categoryCtrl.updateCategory);
// app.delete('/api/categories/:id', categoryCtrl.deleteCategory);

// // Subcategory Routes
// app.post('/api/addsubcategories', createSubcategoryValidationSchema, subcategoryCtrl.addSubcategory);
// app.get('/api/allsubcategories', subcategoryCtrl.getAllSubcategories);
// app.get('/api/subcategories/:id', subcategoryCtrl.getSubcategoryById);
// app.put('/api/subcategories/:id', updateSubcategoryValidationSchema, subcategoryCtrl.updateSubcategory);
// app.delete('/api/subcategories/:id', subcategoryCtrl.deleteSubcategory);

// // Product Routes
// app.post('/api/addproducts', createProductValidationSchema, productCtrl.addProduct);
// app.get('/api/allproducts', productCtrl.getAllProducts);
// app.get('/api/products/:id', productCtrl.getProductById);
// app.put('/api/products/:id', updateProductValidationSchema, productCtrl.updateProduct);
// app.delete('/api/products/:id', productCtrl.deleteProduct);


// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// // Define the port and start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./configuration/database');




// Import controllers and validations
const userCtrl = require('./App/controllers/userController');
const categoryCtrl = require('./App/controllers/categoryController');
const subcategoryCtrl = require('./App/controllers/subcategoryController');
const productCtrl = require('./App/controllers/productController');

const {
  userValidationSchema,
  userLoginValidationSchema,
  userUpdateSchema,
} = require('./App/validations/userValidations');
const {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
} = require('./App/validations/categoryValidations');
const {
  createSubcategoryValidationSchema,
  updateSubcategoryValidationSchema,
} = require('./App/validations/subcategoryValidations');
const {
  createProductValidationSchema,
  updateProductValidationSchema,
} = require('./App/validations/productValidations');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// User Routes
app.post('/api/register', userValidationSchema, userCtrl.register);
app.post('/api/login', userLoginValidationSchema, userCtrl.loginUser);
//app.get('/api/users', userCtrl.getAllUsers);
//app.get('/api/users/:id', userCtrl.getUserById);
app.put('/api/users/:userId', userUpdateSchema, userCtrl.updateUser);
app.delete('/api/users/:userId', userCtrl.deleteUser);


//forgot-password
app.get("/api/forgot-password",userCtrl.forgotPassword)
app.post("/api/reset-password",userCtrl.resetPassword)

// Category Routes
app.post('/api/addcategories', createCategoryValidationSchema, categoryCtrl.addCategory);
app.get('/api/allcategories', categoryCtrl.getAllCategories);
app.get('/api/categories/:id', categoryCtrl.getCategoryById);
app.put('/api/categories/:categoryId', updateCategoryValidationSchema, categoryCtrl.updateCategory);
app.delete('/api/categories/:categoryId', categoryCtrl.deleteCategory);

// Subcategory Routes
app.post('/api/addsubcategories', createSubcategoryValidationSchema, subcategoryCtrl.addSubcategory);
app.get('/api/allsubcategories', subcategoryCtrl.getAllSubcategories);
app.get('/api/subcategories/:id', subcategoryCtrl.getSubcategoryById);
app.put('/api/subcategories/:subcategoryId', subcategoryCtrl.updateSubcategory);
app.delete('/api/subcategories/:subcategoryId', subcategoryCtrl.deleteSubcategory);

// Product Routes
app.post('/api/addproducts', createProductValidationSchema, productCtrl.addProduct);
app.get('/api/allproducts', productCtrl.getAllProducts);
app.get('/api/products/:id', productCtrl.getProductById);
app.put('/api/products/:productId',updateProductValidationSchema ,productCtrl.updateProduct);
app.delete('/api/products/:productId', productCtrl.deleteProduct);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
