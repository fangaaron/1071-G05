const db = require('../util/database');

module.exports = class Order {
    constructor(oId, MName) {
        this.oId = oId;
        this.paymethod = paymethod ;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM order');
    }

    static findByoId(oId) {
        return db.execute('SELECT * FROM order where oId = ?', [oId]);
      }

    static deleteByoId(oId) {
        return db.execute(
            'DELETE FROM order WHERE oId = ?', [oId]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM order');
      }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute('INSERT INTO order (paymethod) VALUES (?)',[req.body.paymethod]);
    }

    // UPDATE
  static updateByoId(req, res) {
    const oId = req.body.oId;
    const paymethod = req.body.paymethod;
    //const date = new Date();
    console.log('model:updateByoId()', paymethod, oId)
    return db.execute(
      'UPDATE order SET paymethod = ? WHERE oId = ?', [paymethod, oId]
    );
  }

}