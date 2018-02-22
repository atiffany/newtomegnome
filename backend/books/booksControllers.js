const db = require('../database/dbConfig.js');

module.exports = {
    get: function(){
        let query = db('books');
        return query;
    },
    getUsersBooks: function(userId) {
        return db('usersBooks')
            .select('books.title', 'books.author')
            .where('usersBooks.userId', userId)
            .join('books', 'books.id', 'usersBooks.bookid')
    },
    getUsersBooksWithUsername: function(username) {
        return db('users')
        .join('usersBooks', 'usersBooks.userid', 'users.id')
        .where('users.username', username)
        .join('books', 'books.id', 'usersBooks.bookid')
        .select('books.title', 'books.author')


        
    },
    insertBook: function(book) {
            return db('books')
                .insert(book)
                .then(id => ({id: id}));
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