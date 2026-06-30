const express = require('express');
const app = express();

const sequelize = require('./config/bd');

const fornecedorRoutes = require('./routes/fornecedor');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', fornecedorRoutes);

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync();
        console.log('Banco conectado com sucesso!');

        app.listen(3000, () => {
            console.log('Servidor rodando em http://localhost:3000');
        });

    } catch (erro) {
        console.error('Erro ao conectar banco:', erro);
    }
}

start();