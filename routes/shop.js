var express = require('express');
var router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getShop);

router.get('/delete', shopController.getDeleteShop);

router.get('/edit', shopController.getDeleteShop);

router.post('/add', shopController.postAddShop);

router.post('/update', shopController.postUpdateShop);

module.exports = router;