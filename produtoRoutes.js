const express = require("express");
const router = express.Router();

const Product = require("../Models/Produto");

router.post("/produtos/inserir", async (req, res) => {
    try {

        const dados = await Product.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            quantidade: req.body.quantidade,
            preco: req.body.preco,
            dataentrada: req.body.dataentrada,
            categoria: req.body.categoria
        });

        res.status(200).json(dados);

    } catch (error) {

        console.error("inserirProduto error:", error);

        res.status(500).json({
            error: error.message || "Erro ao cadastrar produto."
        });

    }
});

// READ - Listar todos
router.get("/produtos/listar", async (req, res) => {
    try {

        const dados = await Product.findAll();

        res.status(200).json(dados);

    } catch (error) {

        console.error("listarProdutos error:", error);

        res.status(500).json({
            error: error.message || "Erro ao listar produtos."
        });

    }
});

router.get("/produtos/:id", async (req, res) => {
    try {

        const dados = await Product.findByPk(req.params.id);

        if (!dados) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.status(200).json(dados);

    } catch (error) {

        console.error("buscarProduto error:", error);

        res.status(500).json({
            error: error.message
        });

    }
});


router.put("/produtos/atualizar/:id", async (req, res) => {
    try {

        await Product.update(
            {
                nome: req.body.nome,
                descricao: req.body.descricao,
                quantidade: req.body.quantidade,
                preco: req.body.preco,
                dataentrada: req.body.dataentrada,
                categoria: req.body.categoria
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        res.status(200).json({
            mensagem: "Produto atualizado com sucesso!"
        });

    } catch (error) {

        console.error("atualizarProduto error:", error);

        res.status(500).json({
            error: error.message
        });

    }
});


router.delete("/produtos/excluir/:id", async (req, res) => {
    try {

        await Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({
            mensagem: "Produto excluído com sucesso!"
        });

    } catch (error) {

        console.error("excluirProduto error:", error);

        res.status(500).json({
            error: error.message
        });

    }
});

module.exports = router;