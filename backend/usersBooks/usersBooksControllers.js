const db = require('../database/dbConfig');

module.exports = {
    get: function(){
        let query = db('usersBooks');
        return query;
    },
    getUsersBooks: function(userId, bookId) {
        return db('usersBooks')
            .join('users', 'users.id', 'usersBooks.userId')
            .join('books', 'books.id', 'usersBooks.bookId')
            .select('users.name', 'book.title')
            .where('usersBooks.userId', userId)
            .where('usersBooks.bookId', bookId);
    },
    insert: function(userId, bookId) {
        return db('usersBooks')
            .insert(userId, bookId)
            .then(id => ({ id: ids[0] }));
    }
};