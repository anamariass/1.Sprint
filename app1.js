const sequelize = require("./database/database");
const Product = require("./models/Product");

async function main() {

    try {

        await sequelize.authenticate();

        console.log("Banco sincronizado com sucesso!");

    await sequelize.sync();
    
    console.log("Tabela criada com sucesso!");
    
    const produto1 = await Product.create({

        nome: "resma de papel",
        descricao:"resma de papel A4",
        quantidade: 3,
        preco: 28.99,
        dataentrada:"2026-06-14",
        categoria:"impressão",

    });


    const produto2= await Product.create({

        nome: "Marcador para quadro branco",
        descricao: " Kit 4 Cores (azul,vermelho,verde e preto) Marcador Pincel Atômico Permanente ",
        quantidade: 8,
        preco: 29.95,
        dataentrada:"2026-06-17",
        categoria:"escolar",

    });


    const produto3= await Product.create({

        nome: "Fita Durex",
        descricao: "Fita Adesiva Transparente Durex 48mmx40m",
        quantidade: 4,
        preco: 3.63,
        dataentrada:"2026-06-22",
    
    });


    const produto4= await Product.create({


        nome:"cartolina branca",
        descricao: "Kit 10 Cartolinas brancas 48x66cm",
        quantidade: 2,
        preco:28.9,
        dataentrada:"2026-06-22",
        categoria:"impressao",

    });

    const produto5= await Product.create({

        nome:"cartolina colorida",
        descricao: "Kit 10 Cartolinas, 48 x 66 cm, 5 Cores Sortidas ( Azul, Rosa, Verde e Amarelo)",
        quantidade:7,
        preco:32.25,
        dataentrada:"2026-06-22",
        categoria:"impressão",

    });

    const produto6= await Product.create({

        nome:"post-it",
        descricao:"Post-it, 3M, Bloco de Notas Adesivas, 76mm x 76mm, 100 folhas, Amarelo",
        quantidade:11,
        preco:18.63,
        dataentrada:"2026-06-26",
        categoria:"artes",

    });

     const produto7= await Product.create({

        nome:"lapis de cor",
        descricao:"Ecolápis de cor, Multicolor Super, 11.1200N+2G, 12 cores + 2 lapis, 14 unidades, Multicor",
        quantidade:2,
        preco:9.5,
        dataentrada:"2026-06-26",
        categoria:"artes",

    });




    await Product.update(
        { preco: 19.15 },
        {
            where: {
                nome: "post-it"
            }
        }
    );


    await Product.update(
        { quantidade:0 },
        {
            where: {
                nome: "lapis de cor"
            }
        }
    );


    await Product.destroy({
  where: {
    nome: "lapis de cor",
  },
});


    const produto = await Product.findByPk(4); 
    console.log(produto);

    const produtos = await Product.findAll();
    console.log(produtos);

   console.log(produto3);




    } catch (erro) {

        console.log(erro);

    }

}


main()