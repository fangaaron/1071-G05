const db = require('../util/database');

module.exports = class Member {
    constructor(mId, name, sex, phone) {
        this.mId = mId;
        this.name = name;
        this.sex = sex;
        this.phone = phone;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM Member');
    }

    static findByMemberId(MemberId) {
        return db.execute('SELECT * FROM Member where mId = ?', [mId]);
    }

    static deleteByMemberId(mId) {
        return db.execute(
            'DELETE FROM Member WHERE mId = ?', [mId]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM Member');
    }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
            'INSERT INTO Member (mId, name, sex, phone) VALUES (?, ?, ?, ?)',
            [req.body.mId, req.body.name, req.body.sex, req.body.phone,]
        );
    }

    // UPDATE
    static updateByMemberId(req, res) {
        const mId = req.body.mId;
        const mId1 = req.body.mId1;
        const name = req.body.name;
        const sex = req.body.sex;
        const phone = req.body.phone;
        //const date = new Date();
        console.log('model:updateBymId()', mId, mId1)
        return db.execute(
            'UPDATE Member SET mId=?, name=?, sex=?, phone=?, WHERE mId = ?', [mId1, name, sex, phone, mId]
        );
    }

}