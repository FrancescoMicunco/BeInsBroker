import sequelize from "./connect.js";

import s from 'sequelize'

const { DataTypes } = s

const Company = sequelize.define('company', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [2, 80]
        }
    },
    referent_name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [2, 40]
        }
    },

    company_reg_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [11, 11]
        }
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 50]
        }
    },
    house_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            max: 1000
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 20]
        }
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 99999,
            min: 1000
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    phone_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
        unique: true,

    },
    mobile_phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true
        }
    }
});

export default Company