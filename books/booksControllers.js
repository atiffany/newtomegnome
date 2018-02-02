const db = require('../database/dbConfig.js');

module.exports = {
    get: function(){
        let query = db('books');
        return query;
    },
    getUsersBooks: function(userId) {
        return db('books')
                .select('title')
                .join('userBooks', 'userBooks.bookId', 'books.id')
                .join('users', 'userBooks', 'userBooks.userId', 'users.id')
                .where('users.id', userId);
    },
    insertBook: function(book) {
        return db('books')
            .insert(book)
            .then(bookId => { res.json(bookId) });
    },
    insertUserBook: function(userId, bookId) {
        return db('usersBooks')
            .insert(userId, bookId)
            .then(response => {
                res.json(response);
            });
    },
   update: function(id, book) {
        return db('books')
            .where('id', id)
            .update(book);
    },
    remove: function(id) {
        return db('books')
            .where('id', id)
            .del();
    }
};