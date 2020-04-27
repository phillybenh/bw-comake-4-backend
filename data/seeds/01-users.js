
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'sara', password: 'devs'},
        {id: 2, username: 'gul', password: 'devs'},
        {id: 3, username: 'emilio', password: 'devs'},
        {id: 4, username: 'ben', password: 'devs'}
      ]);
    });
};
