// const subcategoryValidationSchema = {
//     categoryname: {
//         notEmpty: {
//             errorMessage: "Category name cannot be empty"
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
//     },
//     sequence: {
//         notEmpty: {
//             errorMessage: "Sequence cannot be empty"
//         }
//     },
//     action: {
//         notEmpty: {
//             errorMessage: "Action cannot be empty"
//         }
//     }
// };

// module.exports = subcategoryValidationSchema;


const { checkSchema } = require('express-validator');

const createSubcategoryValidationSchema = checkSchema({
    categoryname: {
        notEmpty: {
            errorMessage: "Category name cannot be empty"
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
    },
    sequence: {
        notEmpty: {
            errorMessage: "Sequence cannot be empty"
        }
    },
    action: {
        notEmpty: {
            errorMessage: "Action cannot be empty"
        }
    }
});






const updateSubcategoryValidationSchema = checkSchema({
    categoryname: {
        optional: true,
        notEmpty: {
            errorMessage: "Category name cannot be empty"
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
    },
    sequence: {
        optional: true,
        notEmpty: {
            errorMessage: "Sequence cannot be empty"
        }
    },
    action: {
        optional: true,
        notEmpty: {
            errorMessage: "Action cannot be empty"
        }
    }
});

module.exports ={ 
    createSubcategoryValidationSchema,
    updateSubcategoryValidationSchema}
