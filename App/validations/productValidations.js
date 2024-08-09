// const productValidationSchema = {
//     productname: {
//         notEmpty: {
//             errorMessage: "Product name cannot be empty"
//         }
//     },
//     category: {
//         notEmpty: {
//             errorMessage: "Category cannot be empty"
//         }
//     },
//     subcategory: {
//         notEmpty: {
//             errorMessage: "Subcategory cannot be empty"
//         }
//     },
//     status: {
//         notEmpty: {
//             errorMessage: "Status cannot be empty"
//         },
//         isIn: {
//             options: [['active', 'inactive']],
//             errorMessage: 'Status must be either "active" or "inactive"'
//         }
//     }
// };

// module.exports = productValidationSchema;


const { checkSchema } = require('express-validator');

const createProductValidationSchema = checkSchema({
    productname: {
        notEmpty: {
            errorMessage: "Product name cannot be empty"
        }
    },
    category: {
        notEmpty: {
            errorMessage: "Category cannot be empty"
        }
    },
    subcategory: {
        notEmpty: {
            errorMessage: "Subcategory cannot be empty"
        }
    },
    status: {
        notEmpty: {
            errorMessage: "Status cannot be empty"
        },
        isIn: {
            options: [['active', 'inactive']],
            errorMessage: 'Status must be either "active" or "inactive"'
        }
    }
});






const updateProductValidationSchema = checkSchema({
    productname: {
        optional: true,
        notEmpty: {
            errorMessage: "Product name cannot be empty"
        }
    },
    category: {
        optional: true,
        notEmpty: {
            errorMessage: "Category cannot be empty"
        }
    },
    subcategory: {
        optional: true,
        notEmpty: {
            errorMessage: "Subcategory cannot be empty"
        }
    },
    status: {
        optional: true,
        notEmpty: {
            errorMessage: "Status cannot be empty"
        },
        isIn: {
            options: [['active', 'inactive']],
            errorMessage: 'Status must be either "active" or "inactive"'
        }
    }
});

module.exports ={ createProductValidationSchema,
    updateProductValidationSchema};
