const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Fornecedor = sequelize.define(
  'Fornecedor',
  {
    nome: {
      type: DataTypes.STRING
    },
    cnpj: {
      type: DataTypes.STRING
    },
    telefone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'Fornecedores',
    timestamps: true
  }
);

module.exports = Fornecedor;