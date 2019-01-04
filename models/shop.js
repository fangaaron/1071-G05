const db = require('../util/database');

module.exports = class Shop {
    constructor(SId, ShopKind) {
        this.SId = SId;
        this.ShopKind = ShopKind;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM Shop');
    }

    static findBySId(SId) {
        return db.execute('SELECT * FROM Shop where SId = ?', [SId]);
      }

    static deleteBySId(SId) {
        return db.execute(
            'DELETE FROM Shop WHERE SId = ?', [SId]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM Shop');
      }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
          'INSERT INTO Shop (SId, ShopKind) VALUES (?, ?)',
          [req.body.SId, req.body.ShopKind]
        );
    }

    static updateBySId(req, res) {
        const SId = req.body.SId;
        const SId1 = req.body.SId1;
        const ShopKind = req.body.ShopKind;
        //const date = new Date();
        console.log('model:updateBySId()', SId, SId1, ShopKind)
        return db.execute(
          'UPDATE Shop SET SId=? , ShopKind=? WHERE SId = ?', [SId1, ShopKind, SId]
        );
      }

}