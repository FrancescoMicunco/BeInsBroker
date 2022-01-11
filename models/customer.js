import sequelize from "./connect.js";

import s from 'sequelize'

const { DataTypes } = s

const Customer = sequelize.define('customer', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4

    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 80]
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 80]
        }
    },
    job: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 80]
        }
    },
    // company_reg_number: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    // },
    // personal_fiscal_number: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     validate: {
    //         len: [16, 16]
    //     }
    // },
    // street: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //         len: [5, 50]
    //     }
    // },

    // city: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //         len: [5, 20]
    //     }
    // },
    // zip_code: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         len: [5, 8],
    //         min: 1000
    //     }
    // },
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     validate: { isEmail: true }
    // },
    // phone_number: {
    //     type: DataTypes.BIGINT,
    //     allowNull: true,
    //     unique: true,

    // },
    // mobile_phone: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     validate: {
    //         isNumeric: true
    //     }
    // },
    // birth_date: {
    //     type: DataTypes.DATEONLY,
    //     allowNull: false
    // },
    // model3: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false
    // },
    // model4: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false
    // }
}, {

});

console.log(Customer === sequelize.models.Customer); // true

export default Customer