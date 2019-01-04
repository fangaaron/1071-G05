const db = require('../util/database');

module.exports = class Product {
    constructor(pId, pname, price, desc) {
        this.PId = PId;
        this.pname = pname;
        this.price = price;
        this.Desc = Desc;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM product');
    }

    static findByPId(PId) {
        return db.execute('SELECT * FROM product where PId = ?', [PId]);
    }

    static deleteByPId(PId) {
        return db.execute(
            'DELETE FROM product WHERE pId = ?', [pId]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM product');
    }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
            'INSERT INTO product (pId), [pname], price, MId, oId) VALUES (?, ?, ?, ?, ?)',
            [req.body.PId, req.body.pname, req.body.price, req.body.OId, req.body.MId]
        );
    }

    // UPDATE
    static updateByPid(req, res) {
        const Product = req.body.Product;
        const Pid1 = req.body.Pid1;
        const pname = req.body.pname;
        const price = req.body.price;
        const OId = req.body.OId;
        const MId = req.body.MId;
        //const date = new Date();
        console.log('model:updateByPid()', Pid, Pid1)
        return db.execute(
            'UPDATE product SET Pid=?, pname=?, price=?, OId=?, MId=?  WHERE Pid = ?', [Pid1, pname, price, oId, mId, pid]
        );
    }

}