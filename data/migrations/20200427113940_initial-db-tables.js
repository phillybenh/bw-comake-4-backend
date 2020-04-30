exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 36).notNullable().unique();
      tbl.text("password").notNullable();
      tbl.string("first_name");
      tbl.string("last_name");
      tbl.string("zip_code", 5);
      tbl.string("bio");
    })

    .createTable("issues", (tbl) => {
      tbl.increments().primary();
      tbl.string("short_description").notNullable();
      tbl.string("description");
      tbl.string("zip_code", 5).notNullable();
      tbl.integer("user_id").notNullable().references("id").inTable("users");
      tbl.integer("upvotes").defaultTo(1);
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("issues").dropTableIfExists("users");
};
