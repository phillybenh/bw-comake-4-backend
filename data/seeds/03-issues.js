
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('issues').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('issues').insert([
        {id: 1, short_description: 'rowValue1', description: 'An issue\'s long description', zip_code: 12345, user_id: 1, upvotes: 1},
        {id: 2, short_description: 'rowValue2', description: 'An issue\'s long description', zip_code: 12345, user_id: 1, upvotes: 1},
        {id: 3, short_description: 'rowValue3', description: 'An issue\'s long description', zip_code: 12345, user_id: 1, upvotes: 1}
      ]);
    });
};
