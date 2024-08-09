// const categoryValidationSchema = {
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
//     }
// };
const { checkSchema } = require('express-validator');

const createCategoryValidationSchema = checkSchema({
    // id: {
    //     notEmpty: {
    //         errorMessage: "ID cannot be empty"
    //     },
    //     isInt: {
    //         errorMessage: "ID must be a number"
    //     }
    // },
    categoryname: {
        notEmpty: {
            errorMessage: "Category name cannot be empty"
        }
    },
    // image: {
    //     optional: true,
    //     isURL: {
    //         errorMessage: "Image must be a valid URL"
    //     }
    // },
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
    }
});



const updateCategoryValidationSchema = checkSchema({
    // id: {
    //     optional: true,
    //     isInt: {
    //         errorMessage: "ID must be a number"
    //     }
    // },
//     categoryname: {
//         optional: true,
//         notEmpty: {
//             errorMessage: "Category name cannot be empty"
//         }
//     },
//     image: {
//         optional: true,
//         isURL: {
//             errorMessage: "Image must be a valid URL"
//         }
//     },
//     status: {
//         optional: true,
//         isIn: {
//             options: [['active', 'inactive']],
//             errorMessage: 'Status must be either "active" or "inactive"'
//         }
//     },
//     sequence: {
//         optional: true,
//         notEmpty: {
//             errorMessage: "Sequence cannot be empty"
//         }
//     }
 });

module.exports = {
    createCategoryValidationSchema,
    updateCategoryValidationSchema};

