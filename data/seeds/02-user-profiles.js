
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_profiles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_profiles').insert([
        {id: 1, user_id: 3, first_name: 'Emilio', last_name: 'Diaz-Goico', zip_code: 12345, bio: 'Test Bio 3' },
        {id: 2, user_id: 2, first_name: 'Gul', last_name: 'Hossain', zip_code: 12345, bio: 'Test Bio 2' },
        {id: 3, user_id: 4, first_name: 'Ben', last_name: 'Haus', zip_code: 12345, bio: 'Test Bio 4' },
        {id: 4, user_id: 1, first_name: 'Sara', last_name: 'Reidy', zip_code: 12345, bio: 'Test Bio 1' }
      ]);
    });
};
