const express = require('express');
const app = express();

const sequelize = require('./config/bd');
const Fornecedor = require('./models/fornecedor.model');

app.use(express.json());



app.post('/fornecedores', async (req, res) => {

  const fornecedor = await Fornecedor.create({
    nome: req.body.nome,
    cnpj: req.body.cnpj,
    telefone: req.body.telefone,
    email: req.body.email
  });

  res.status(201).json(fornecedor);
});



app.get('/fornecedores', async (req, res) => {

  const fornecedores = await Fornecedor.findAll();

  res.json(fornecedores);
});



app.get('/fornecedores/:id', async (req, res) => {

  const fornecedor = await Fornecedor.findByPk(req.params.id);

  if (!fornecedor) {
    return res.status(404).json({
      mensagem: 'Fornecedor não encontrado'
    });
  }

  res.json(fornecedor);
});



app.put('/fornecedores/:id', async (req, res) => {

  const fornecedor = await Fornecedor.findByPk(req.params.id);

  if (!fornecedor) {
    return res.status(404).json({
      mensagem: 'Fornecedor não encontrado'
    });
  }

  fornecedor.nome = req.body.nome;
  fornecedor.cnpj = req.body.cnpj;
  fornecedor.telefone = req.body.telefone;
  fornecedor.email = req.body.email;

  await fornecedor.save();

  res.json({
    mensagem: 'Fornecedor atualizado'
  });
});



app.delete('/fornecedores/:id', async (req, res) => {

  const fornecedor = await Fornecedor.findByPk(req.params.id);

  if (!fornecedor) {
    return res.status(404).json({
      mensagem: 'Fornecedor não encontrado'
    });
  }

  await fornecedor.destroy();

  res.json({
    mensagem: 'Fornecedor removido'
  });
});


async function conectarBD() {

  try {

    await sequelize.sync();

    console.log('Banco conectado');

  } catch (erro) {

    console.log(erro);

  }
}

conectarBD();

app.listen(3000, () => {
  console.log('Servidor executando');
});