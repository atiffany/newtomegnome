exports.up = function(knex, Promise) {
  //create users, create books read, create books to read
  return createUsersTable(knex)
    .then(createBooksTable)
    .then(createUsersBooksTable)
    .catch(error => {
        console.log(error);
        reject(error);
    });
};

exports.down = function(knex, Promise) {
  //erase users, books read, books to read
  return knex.schema
    .dropTableIfExists('usersBooks')
    .then(function() {
        console.log('dropping users\' books table');
        return knex.schema.dropTableIfExists('books');
    })
    .then(function() {
        console.log('dropping books table');
        return knex.schema.dropTableIfExists('users');
    })
    .catch(error => console.log(error));
};

function createUsersTable(knex) {
    console.log('creating users table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('users', function(users) {
            users.increments('id');
            users.string('username', 32).notNullable().unique('username', 'uq_username');
            users.string('name', 32).notNullable() ;

            console.log('created the users table');
            resolve(knex);
        })
        .catch(error => reject(error));
    });
}

function createBooksTable(knex) {
    console.log('creating books table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('books', function(books) {
            books.increments('id');
            books.string('title', 255).notNullable();
            books.string('author', 255).notNullable();

            console.log('books table created');
            resolve(knex);
        })
        .catch(error => console.log(error));
    });
}

function createUsersBooksTable(knex) {
    console.log('creating users\' books table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('usersBooks', function(usersBooks) {
            usersBooks.int('userId').references('id').inTable('users');
            usersBooks.int('bookId').references('id').inTable('books');
            usersBooks.boolean('read').defaultTo(false);

            console.log('users\' books table created');
            resolve(knex);
        })
        .catch(error => console.log(error));
    });
}