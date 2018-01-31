const db = require('../database/dbConfig.js');

module.exports = {
    get: function(id) {
        return db('books')
    },
    insert: function(book) {
        return db('books')
            .insert(book)
            .then(ids => ({ id: ids[0] }));
    },
};