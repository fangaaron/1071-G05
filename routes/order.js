var express = require('express');
var router = express.Router();

const orderController = require('../controllers/order');

router.get('/', orderController.getorder);

router.get('/delete', orderController.getDeleteorder);

router.get('/edit', orderController.getEditorder);

router.post('/add', orderController.postAddorder);

router.post('/update', orderController.postUpdateorder);

module.exports = router;