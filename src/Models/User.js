const { DataTypes } = require('sequelize');
const db = require('../Config/Config');

const User = db.sequelize.define('User', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    is_active: {
        type: DataTypes.STRING,
        allowNull: false,
        default:"Active"
    }

}, {
    tableName: 'User',
    timestamps: false
});



module.exports = User;
