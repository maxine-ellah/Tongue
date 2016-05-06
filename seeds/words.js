
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('words').del(),

    // Inserts seed entries
    knex('words').insert({id: 1, word: 'Person', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257129/person_unrt8r.png'}),
    knex('words').insert({id: 2, word: 'Time', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257138/time_ftrh4u.png'}),
    knex('words').insert({id: 3, word: 'Sun', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416648/sun_ayk1jz.png'}),
    knex('words').insert({id: 4, word: 'Cheese', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416510/cheese_rof8dr.png'}),
    knex('words').insert({id: 5, word: 'Man'}),
    knex('words').insert({id: 6, word: 'Thing'}),
    knex('words').insert({id: 7, word: 'Woman'}),
    knex('words').insert({id: 8, word: 'Life'}),
    knex('words').insert({id: 9, word: 'Child'}),
    knex('words').insert({id: 10, word: 'World'}),
    knex('words').insert({id: 11, word: 'School'}),
    knex('words').insert({id: 12, word: 'Orchard'}),
    knex('words').insert({id: 13, word: 'Family'}),
    knex('words').insert({id: 14, word: 'Student'}),
    knex('words').insert({id: 15, word: 'Cabbage', respelling: 'kab-ij', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426170/cabbage_xrgz2t.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462427947/Cabbage-test_st0rn8.m4a'}),
    knex('words').insert({id: 16, word: 'Rhubarb'}),
    knex('words').insert({id: 17, word: 'Problem'}),
    knex('words').insert({id: 18, word: 'Hand', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426161/hand_qplean.png'}),
    knex('words').insert({id: 19, word: 'Place'}),
    knex('words').insert({id: 20, word: 'Father'})
  );
};
