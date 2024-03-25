const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(100)
        // allowNull por defecto esta en true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = User;