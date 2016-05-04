
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('words').del(),

    // Inserts seed entries
    knex('words').insert({id: 1, word: 'person', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257129/person_unrt8r.png'}),
    knex('words').insert({id: 2, word: 'time', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257138/time_ftrh4u.png'})
  );
};
