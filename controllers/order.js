const moment = require('moment');

const Order = require('../models/order');

exports.getOrder= (req, res, next) => {
    Order.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('order', {
                data: rows,
                title: 'order List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteOrder = (req, res, next) => {
    Order.deleteByMId(req.query.MId)
        .then(([rows]) => {
            res.redirect('/order');
        })
        .catch();
};

exports.getEditOrder = async (req, res, next) => {

    let order;
    let oId;

    const getOrders = await Order.fetchAll()
        .then(([rows]) => {
            order = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findOrderByoId = await Order.findByoId(req.query.oId)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            oId = rows;
            //console.log('post[0].date: ', post[0].date);
           //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));
    
    res.render('editMenu', {
        data: MId,
        title: 'Edit Order',
        order: order
   });

};

exports.postUpdateOrder = (req, res, next) => {

    Order.updateByoId(req, res)
        .then(([rows]) => {
            res.redirect('/order');
        })
        .catch(err => console.log(err));
};

exports.postAddOrder = (req, res, next) => {

    Order.add(req, res)
        .then(([rows]) => {
            res.redirect('/order');
        })
        .catch(err => console.log(err));
};