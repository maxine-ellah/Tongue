
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('words').del(),

    // Inserts seed entries
    knex('words').insert({id: 1, word: 'Person', respelling: '[pur-suh n]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257129/person_unrt8r.png'}),
    knex('words').insert({id: 2, word: 'Time', respelling: '[tahym]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257138/time_ftrh4u.png'}),
    knex('words').insert({id: 3, word: 'Sun', respelling: '[suhn]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416648/sun_ayk1jz.png'}),
    knex('words').insert({id: 4, word: 'Cheese', respelling: '[cheez]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416510/cheese_rof8dr.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462743967/Cheese_us222r.m4a'}),
    knex('words').insert({id: 5, word: 'Banana', respelling: '[buh-nan-uh]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462744474/banana_gxnjg3.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462743975/Banana_mjckrv.m4a'}),
    knex('words').insert({id: 6, word: 'Thing', respelling: '[thing]'}),
    knex('words').insert({id: 7, word: 'Trousers', respelling: '[trou-zerz]'}),
    knex('words').insert({id: 8, word: 'Car', respelling: '[kahr]'}),
    knex('words').insert({id: 9, word: 'Monkey', respelling: '[muhng-kee]'}),
    knex('words').insert({id: 10, word: 'World', respelling: '[wurld]'}),
    knex('words').insert({id: 11, word: 'Supermarket', respelling: '[soo-per-mahr-kit]'}),
    knex('words').insert({id: 12, word: 'Mountain', respelling: '[moun-tn]'}),
    knex('words').insert({id: 13, word: 'Tree', respelling: '[tree]'}),
    knex('words').insert({id: 14, word: 'Bird', respelling: '[burd]'}),
    knex('words').insert({id: 15, word: 'Cabbage', respelling: '[kab-ij]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426170/cabbage_xrgz2t.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462427947/Cabbage-test_st0rn8.m4a'}),
    knex('words').insert({id: 16, word: 'Rhubarb', respelling: '[roo-bahrb]'}),
    knex('words').insert({id: 17, word: 'Problem', respelling: '[prob-luh m]'}),
    knex('words').insert({id: 18, word: 'Hand', respelling: '[hand]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426161/hand_qplean.png'}),
    knex('words').insert({id: 19, word: 'Place', respelling: '[pleys]'}),
    knex('words').insert({id: 20, word: 'Bread', respelling: '[bred]'})
  );
};
