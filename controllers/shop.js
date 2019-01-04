const moment = require('moment');

const Shop= require('../models/shop');

exports.getShop = (req, res, next) => {
    Shop.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('shop', {
                data: rows,
                title: 'Shop List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteShop = (req, res, next) => {
    Shop.deleteBysId(req.query.sId)
        .then(([rows]) => {
            res.redirect('/Shop');
        })
        .catch();
};

exports.getEditShop = async (req, res, next) => {

    let Shop;
    let sId;

    const getshop= await shop.fetchAll()
        .then(([rows]) => {
            shop = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findShopBySId = await Shop.findBysId(req.query.SId)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            SId = rows;
            //console.log('post[0].date: ', post[0].date);
           console.log('findPostById(): ', JSON.stringify(SId));
        })
        .catch(err => console.log(err));
    
    res.render('editShop', {
        data: SId,
        title: 'Edit SId',
        Shop:Shop
   });
};

exports.postUpdateShop = (req, res, next) => {

    Shop.updateBySId(req, res)
        .then(([rows]) => {
            res.redirect('/Shop');
        })
        .catch(err => console.log(err));
};

exports.postAddShop = (req, res, next) => {

    Shop.add(req, res)
        .then(([rows]) => {
            res.redirect('/shop');
        })
        .catch(err => console.log(err));
};