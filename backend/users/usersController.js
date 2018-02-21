const db = require('../database/dbConfig.js');

module.exports = {
    get: function(){
        let query = db('users');
        return query;
    },
    getUser: function(username){
        return db('users')
            .where('username', username);
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