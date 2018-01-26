const db = require('../database/dbConfig.js');

module.exports = {
    get: function(id){
        if (id) {
            query.where('id', id).first();
        }
        return query;
    },
    getUsersBooks: function(userId) {
        return db('titles as t')
            .join('users as u', 'u.id', 't.userId')
            .select('t.title', 't.author')
            .where('t.userId', userId);
    },
    insert: function(user) {

    },
    update: function(id, user) {

    },
    remove: function(id) {

    }
};