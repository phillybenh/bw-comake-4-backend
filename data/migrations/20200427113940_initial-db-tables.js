exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 36).notNullable().unique();
      tbl.text('password').notNullable();
      tbl.string('first_name')
      tbl.string('last_name')
      tbl.integer('zip_code', 5)
      tbl.string('bio')
  })

  .createTable('issues', tbl =>{
      tbl.increments();
      tbl.string('short_description').notNullable();
      tbl.string('description')
      tbl.integer('zip_code', 5).notNullable();
      tbl.integer('user_id').notNullable().references('id').inTable('users')
      tbl.integer('upvotes').defaultTo(1)
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('issues')
  .dropTableIfExists('user_profiles')
  .dropTableIfExists('users')
};