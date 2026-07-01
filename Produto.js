const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product",
     {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        descricao:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        quantidade:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        preco:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        dataentrada:{
            type: DataTypes.DATE,
            allowNull: false,
        },

        categoria:{
            type: DataTypes.STRING,
            allowNull: true,
        }


})

module.exports = Product;
console.log(Product === sequelize.models.Product);