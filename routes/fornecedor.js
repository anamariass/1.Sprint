const express = require('express');
const router = express.Router();
const Fornecedor = require('../models/fornecedor.models');



router.get('/fornecedores/criar', async (req, res) => {
    try {
        await Fornecedor.sync();
        res.json({ mensagem: 'Tabela fornecedores criada com sucesso' });
    } catch (erro) {
              console.error(erro.message)
       res.status(500).json({ erro: 'Erro ao criar tabela' });
    }
});


router.post('/fornecedores/inserir', async (req, res) => {
    try {
        const dados = await Fornecedor.bulkCreate([
            {
                nome: 'Fornecedor Piedade',
                email: 'piedade@email.com',
                telefone: '1111-1111',
                cnpj: '11.111.111/0001-11'
            },
            {
                nome: 'Fornecedor Maispapel',
                email: 'maispapel@email.com',
                telefone: '2222-2222',
                cnpj: '22.222.222/0001-22'
            }
        ]);

        res.status(201).json(dados);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao inserir dados iniciais' });
    }
});


router.post('/fornecedores', async (req, res) => {
    try {
        const fornecedor = await Fornecedor.create(req.body);
        res.status(201).json(fornecedor);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao cadastrar fornecedor' });
    }
});


router.get('/fornecedores', async (req, res) => {
    try {
        const fornecedores = await Fornecedor.findAll();
        res.json(fornecedores);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar fornecedores' });
    }
});


router.get('/fornecedores/:id', async (req, res) => {
    try {
        const fornecedor = await Fornecedor.findByPk(req.params.id);

        if (!fornecedor) {
            return res.status(404).json({ mensagem: 'Fornecedor não encontrado' });
        }

        res.json(fornecedor);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar fornecedor' });
    }
});


router.put('/fornecedores/:id', async (req, res) => {
    try {
        const fornecedor = await Fornecedor.findByPk(req.params.id);

        if (!fornecedor) {
            return res.status(404).json({ mensagem: 'Fornecedor não encontrado' });
        }

        await fornecedor.update(req.body);

        res.json(await fornecedor.reload());
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar fornecedor' });
    }
});


router.delete('/fornecedores/:id', async (req, res) => {
    try {
        const fornecedor = await Fornecedor.findByPk(req.params.id);

        if (!fornecedor) {
            return res.status(404).json({ mensagem: 'Fornecedor não encontrado' });
        }

        await fornecedor.destroy();

        res.json({ mensagem: 'Fornecedor removido com sucesso' });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao deletar fornecedor' });
    }
});

module.exports = router;