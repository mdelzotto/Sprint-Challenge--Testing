exports.up = function(knex) {
  return knex.schema .createTable('games', tbl => {
    tbl.increments();
    tbl.string('title', 280)
      .notNullable()
      .unique();
    tbl.string('genre', 280)
      .notNullable()
    tbl.integer('releaseYear');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('games');
};
