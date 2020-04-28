
exports.seed = function(knex) {
  return knex('issues').delete()
  .then(() => {
    return knex('users').delete()
  })
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'emilio', password: 'dev', first_name: 'Emilio', last_name: 'Diaz-Goico', zip_code: 12345, bio: 'Test Bio 3' },
        {id: 2, username: 'gul', password: 'dev', first_name: 'Gul', last_name: 'Hossain', zip_code: 12345, bio: 'Test Bio 2' },
        {id: 3, username: 'ben', password: 'dev', first_name: 'Ben', last_name: 'Haus', zip_code: 12345, bio: 'Test Bio 4' },
        {id: 4, username: 'sara', password: 'dev', first_name: 'Sara', last_name: 'Reidy', zip_code: 12345, bio: 'Test Bio 1' }
      ]);
    });
};
