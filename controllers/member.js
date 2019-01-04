const moment = require('moment');

const Member = require('../models/member');


exports.getMember = (req, res, next) => {
    Member.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows, ["mId", "name", "sex", "phone"]));
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('member', {
                data: rows,
                title: 'Member List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteMember = (req, res, next) => {
    Owner.deleteByMId(req.query.MId)
        .then(([rows]) => {
            res.redirect('/member');
        })
        .catch();
};

exports.getEditMember = async (req, res, next) => {

    let member;
    let mId;

    const getMember = await Member.fetchAll()
        .then(([rows]) => {
            member = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findMemberByMemberId = await Member.findByMemberId(req.query.mId)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            MemberId = rows;
            //console.log('post[0].date: ', post[0].date);
            //console.log('findPostById(): ', JSON.stringify(OwnerId));
        })
        .catch(err => console.log(err));

    res.render('editMember', {
        data: MemberId,
        title: 'Edit Member',
        member: member,
      
    });

};

exports.postUpdateMember = (req, res, next) => {

    Owner.updateByMemberId(req, res)
        .then(([rows]) => {
            res.redirect('/member');
        })
        .catch(err => console.log(err));
};

exports.postAddMember = (req, res, next) => {

    Owner.add(req, res)
        .then(([rows]) => {
            res.redirect('/member');
        })
        .catch(err => console.log(err));
};