const { checkSchema } = require('express-validator');

const userValidationSchema = checkSchema({
  username: {
    notEmpty: {
      errorMessage: 'Username cannot be empty',
    },
  },
  email: {
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
    isEmail: {
      errorMessage: 'Invalid email format',
    },
  },
  password: {
    notEmpty: {
      errorMessage: 'Password cannot be empty',
    },
  },
  // Add other fields here
});

const userLoginValidationSchema = checkSchema({
  email: {
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
    isEmail: {
      errorMessage: 'Invalid email format',
    },
  },
  password: {
    notEmpty: {
      errorMessage: 'Password cannot be empty',
    },
  },
});

const userUpdateSchema = checkSchema({
  username: {
    optional: true,
    notEmpty: {
      errorMessage: 'Username cannot be empty',
    },
  },
  email: {
    optional: true,
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
    isEmail: {
      errorMessage: 'Invalid email format',
    },
  },
  // Add other fields here
});

module.exports = {
  userValidationSchema,
  userLoginValidationSchema,
  userUpdateSchema,
};
