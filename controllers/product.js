const moment = require('moment');

const Product = require('../models/product');
const Member = require('../models/member');
const Order = require('../models/order');

exports.getProduct= (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('product', {
                data: rows,
                title: 'Product List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteProduct = (req, res, next) => {
    Product.deleteBypId (req.query.pId)
        .then(([rows]) => {
            res.redirect('/product');
        })
        .catch();
};

exports.getEditProduct = async (req, res, next) => {

    let Product;
    let pId;
    let pName;
    let mId;

    const getMId = await Member.fetchAll()
        .then(([rows]) => {
            mId = rows;
    })

    const getmId = await order.fetchAll()
        .then(([rows]) => {
            mId = rows;
    })

    const getOrder = await Order.fetchAll()
        .then(([rows]) => {
            order = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findProductbypID = await order.findByoId(req.query.oId)
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
    
    res.render('editOrd', {
        data: oId,
        title: 'Edit Order',
        order:order,
        OId:OId,
        MId:MId
   });

};

exports.postUpdateProduct = (req, res, next) => {

    Vehicle.updateByOId(req, res)
        .then(([rows]) => {
            res.redirect('/product');
        })
        .catch(err => console.log(err));
};

exports.postAddProduct = (req, res, next) => {

    Product.add(req, res)
        .then(([rows]) => {
            res.redirect('/product');
        })
        .catch(err => console.log(err));
};