const db = require('../database/dbConfig');

module.exports = {
    get: function(){
        let query = db('usersBooks');
        return query;
    },
    getUsersBooks: function(userId) {
        return db('usersBooks')
            .select('books.title', 'books.author')
            .where('usersBooks.userId', userId)
            //.where('usersBooks.userid', userId)
            .join('books', 'books.id', 'usersBooks.bookid')
    },
    insert: function(userId, bookId) {
        return db('usersBooks')
            .insert(userId, bookId)
            .then(id => ({ id: ids[0] }));
    }
};