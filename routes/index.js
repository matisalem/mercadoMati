var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mercadoliebre', homeController.mercadoliebre);

router.get('/mercadoliebre/:category/:id/detail', homeController.detallesDeArticulos);


router.get('/register', function(req, res, next) {
  res.render('regis.ejs');
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs');
});


module.exports = router;


