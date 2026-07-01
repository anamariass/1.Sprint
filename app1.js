const express = require("express");
const sequelize = require("./config/database");

const produtoRoutes = require("./rotas/produtoRoutes");

const app = express();

app.use(express.json());

sequelize.authenticate()
.then(() => {
    console.log("Banco conectado!");
})
.catch((erro) => {
    console.log(erro);
});

sequelize.sync();

app.use("/produtos", produtoRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando!");
});