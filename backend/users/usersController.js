const db = require('../database/dbConfig.js');

module.exports = {
    getWithId: function(id){
        let query = db('users');
        if (id) {
            query.where('id', id).first();
        }
        return query;
    },
    get: function(){
        let query = db('users');
        return query;
    },
    insert: function(user) {
        return db('users')
            .insert(user)
            .then(id => ({id: id}));
    },
    update: function(id, user) {
        return db('users')
            .where('id', id)
            .update(user);
    },
    remove: function(id) {
        return db('users')
            .where('id', id)
            .del();
    }
};