const db = require('../database/dbConfig.js');

module.exports = {
    get: function(id){
        let query = db('users');
        if (id) {
            query.where('id', id).first();
        }
        return query;
    },
    getUsersBooks: function(userId) {
        return db('books')
                .select('title')
                .join('userBooks', 'userBooks.bookId', 'books.id')
                .join('users', 'userBooks', 'userBooks.userId', 'users.id')
                .where('users.id', userId);
    },
    insert: function(user) {
        return db('users')
            .insert(user)
            .then(id => ({ id: ids[0] }));
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