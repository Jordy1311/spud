
exports.up = function(knex) {
  return knex.schema.createTable('threads', table => {
    table.increments('id').primary()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('threads')
};
