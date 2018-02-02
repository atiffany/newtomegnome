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
    insert: function(userId,book) {
        return db('books')
            .insert(book)
            .then(bookId => {
                db('usersBooks')
                    .insert(userId, bookId)
                    .then(res => ({ "message": res }));
            })
            .catch(error => {
                console.log(error);
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