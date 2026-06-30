const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Fornecedor = sequelize.define('Fornecedor', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING
    },
    cnpj: {
        type: DataTypes.STRING
    }
});

module.exports = Fornecedor;