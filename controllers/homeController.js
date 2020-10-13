const fs = require('fs');
const products = JSON.parse(fs.readFileSync(__dirname + '/../productsDataBase.json', 'utf-8'));

const homeController = {

    detallesDeArticulos: function (req, res){
        let categoria = req.params.category;
        let ida = req.params.id;
        for (let i=0; i<products.length; i++){
            if (products[i].category == categoria){
                if (products[i].id == ida){
                    let productoEncontrado = products[i];
                    res.render('Programa1', {
                        product : productoEncontrado
                    } )
                } else {
                    res.send('tienes que elegir el articulo')
                }
            } else {
                res.send('tienes que elegir la categoria')
            }
        }
    },

    mercadoliebre: function (req, res){
        res.render('Programa1.ejs', {
            products: products
        })
    }

};

module.exports = homeController