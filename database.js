const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "crud",
    "root",
    "Lirae#26",
    {
        host: "localhost",
        dialect: "mysql"
    }
   );

module.exports = sequelize;