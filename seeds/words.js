
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('words').del(),

    // Inserts seed entries
    knex('words').insert({id: 1, word: 'Person', respelling: '[pur-suh n]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257129/person_unrt8r.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758162/Person_qz2fg4.mp3'}),
    knex('words').insert({id: 2, word: 'Time', respelling: '[tahym]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257138/time_ftrh4u.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758144/Time_hdb2cw.mp3'}),
    knex('words').insert({id: 3, word: 'Sun', respelling: '[suhn]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416648/sun_ayk1jz.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758157/Sun_hqn6x7.mp3'}),
    knex('words').insert({id: 4, word: 'Cheese', respelling: '[cheez]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416510/cheese_rof8dr.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758181/Cheese_hgheyh.mp3'}),
    knex('words').insert({id: 5, word: 'Banana', respelling: '[buh-nan-uh]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462744474/banana_gxnjg3.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462743975/Banana_mjckrv.mp3'}),
    knex('words').insert({id: 6, word: 'Thing', respelling: '[thing]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462765411/thing1_pr1kau.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758150/Thing_koxiqi.mp3'}),
    knex('words').insert({id: 7, word: 'Trousers', respelling: '[trou-zerz]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462765416/trousers_bvkuya.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758133/Trousers_fikjy2.m4a'}),
    knex('words').insert({id: 8, word: 'Car', respelling: '[kahr]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462765385/car1_o0hke6.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758189/Car_ejzqh4.mp3'}),
    knex('words').insert({id: 9, word: 'Monkey', respelling: '[muhng-kee]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758176/Monkey_kztpes.mp3'}),
    knex('words').insert({id: 10, word: 'World', respelling: '[wurld]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758127/World_ptt0rc.mp3'}),
    knex('words').insert({id: 11, word: 'Supermarket', respelling: '[soo-per-mahr-kit]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771533/Supermarket_akdrz4.mp3'}),
    knex('words').insert({id: 12, word: 'Mountain', respelling: '[moun-tn]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758169/Mountain_zvcglp.mp3'}),
    knex('words').insert({id: 13, word: 'Tree', respelling: '[tree]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758138/Tree_ccu6ai.mp3'}),
    knex('words').insert({id: 14, word: 'Bird', respelling: '[burd]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771724/Bird_n1ndse.mp3'}),
    knex('words').insert({id: 15, word: 'Cabbage', respelling: '[kab-ij]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426170/cabbage_xrgz2t.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758203/Cabbage_h79jr0.mp3'}),
    knex('words').insert({id: 16, word: 'Rhubarb', respelling: '[roo-bahrb]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771770/Rhubarb_edm7qy.mp3'}),
    knex('words').insert({id: 17, word: 'Problem', respelling: '[prob-luh m]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771776/Problem_vx8yju.mp3'}),
    knex('words').insert({id: 18, word: 'Hand', respelling: '[hand]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426161/hand_qplean.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771783/Hand_oiyifg.mp3'}),
    knex('words').insert({id: 19, word: 'Place', respelling: '[pleys]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462773156/Place_qys0zl.mp3'}),
    knex('words').insert({id: 20, word: 'Bread', respelling: '[bred]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462773171/Bread_bpgpie.mp3'})
  );
};
