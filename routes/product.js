var express = require('express');
var router = express.Router();

const productControll = require('../controllers/product');

router.get('/', productControll.getProduct);

router.get('/delete', productControll.getDeleteProduct);

router.get('/edit', productControll.getEditProduct);

router.post('/add', productControll.postAddProduct);

router.post('/update', productControll.postUpdateproduct);

module.exports = router;