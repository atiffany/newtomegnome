exports.up = function(knex, Promise) {
  //create users, create books read, create books to read
  return createUsersTable(knex)
    .then(createBooksReadTable)
    .then(createBooksToReadTable)
    .catch(error => {
        console.log(error);
        reject(error);
    });
};

exports.down = function(knex, Promise) {
  //erase users, books read, books to read
  return knex.schema
    .dropTableIfExists('booksToRead')
    .then(function() {
        console.log('dropping future books table');
        return knex.schema.dropTableIfExists('booksRead');
    })
    .then(function() {
        console.log('dropping books read table');
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
            users.timestamp('createdAt').defaultTo(knex.fn.now());

            console.log('created the users table');
            resolve(knex);
        })
        .catch(error => reject(error));
    });
}

function createBooksReadTable(knex) {
    console.log('creating books read table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('booksRead', function(booksRead) {
            booksRead.increments('id');
            booksRead.int('userId').references('id').inTable('users');
            booksRead.string('title', 255).notNullable();
            booksRead.string('author', 255).notNullable();

            console.log('books read table created');
            resolve(knex);
        })
        .catch(error => console.log(error));
    });
}

function createBooksToReadTable(knex) {
    console.log('creating books to read table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('booksToRead', function(booksToRead) {
            booksToRead.increments('id');
            booksToRead.int('userId').references('id').inTable('users');
            booksToRead.string('title', 255).notNullable();
            booksToRead.string('author', 255).notNullable();

            console.log('books to read table created');
            resolve(knex);
        })
        .catch(error => console.log(error));
    });
}