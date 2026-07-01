const express = require('express');
const router = express.Router();
const Estoque = require('../models/estoque.model');


router.get('/estoque/criar', async (req, res) => {
    try {
        await Estoque.sync();
        res.json({ mensagem: 'Tabela estoque criada com sucesso' });
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ erro: 'Erro ao criar tabela' });
    }
});


router.post('/estoque/inserir', async (req, res) => {
    try {
        const dados = await Estoque.create({
            produto: req.body.produto,
            quantidade: req.body.quantidade,
            estoqueMinimo: req.body.estoqueMinimo,
            localizacao: req.body.localizacao
        });

        res.status(201).json(dados);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao cadastrar registro de estoque' });
    }
});

router.post('/estoque', async (req, res) => {
    try {
        const estoque = await Estoque.create(req.body);
        res.status(201).json(estoque);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao cadastrar registro de estoque' });
    }
});


router.get('/estoque', async (req, res) => {
    try {
        const estoque = await Estoque.findAll();
        res.json(estoque);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar registros de estoque' });
    }
});



router.get('/estoque/:id', async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);

        if (!estoque) {
            return res.status(404).json({
                mensagem: 'Registro de estoque não encontrado'
            });
        }

        res.json(estoque);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar registro de estoque' });
    }
});



router.put('/estoque/:id', async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);

        if (!estoque) {
            return res.status(404).json({
                mensagem: 'Registro de estoque não encontrado'
            });
        }

        await estoque.update(req.body);

        res.json(await estoque.reload());
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar registro de estoque' });
    }
});



router.delete('/estoque/:id', async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);

        if (!estoque) {
            return res.status(404).json({
                mensagem: 'Registro de estoque não encontrado'
            });
        }

        await estoque.destroy();

        res.json({ mensagem: 'Registro de estoque removido com sucesso' });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao deletar registro de estoque' });
    }
});

module.exports = router;