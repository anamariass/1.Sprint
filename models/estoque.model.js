const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Estoque = sequelize.define('Estoque', {
    produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estoqueMinimo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    localizacao: {
        type: DataTypes.STRING
    }
});

module.exports = Estoque;