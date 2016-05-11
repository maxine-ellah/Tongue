
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('words').del(),

    // Inserts seed entries
    knex('words').insert({id: 1, word: 'Person', lang: 'english', respelling: '[pur-suh n]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257129/person_unrt8r.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758162/Person_qz2fg4.mp3'}),
    knex('words').insert({id: 2, word: 'Time', lang: 'english', respelling: '[tahym]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257138/time_ftrh4u.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758144/Time_hdb2cw.mp3'}),
    knex('words').insert({id: 3, word: 'Sun', lang: 'english', respelling: '[suhn]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416648/sun_ayk1jz.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758157/Sun_hqn6x7.mp3'}),
    knex('words').insert({id: 4, word: 'Cheese', lang: 'english', respelling: '[cheez]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416510/cheese_rof8dr.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758181/Cheese_hgheyh.mp3'}),
    knex('words').insert({id: 5, word: 'Banana', lang: 'english', respelling: '[buh-nan-uh]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462744474/banana_gxnjg3.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462743975/Banana_mjckrv.mp3'}),
    knex('words').insert({id: 6, word: 'Thing', lang: 'english', respelling: '[thing]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462922490/thing_3_mx9inz.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758150/Thing_koxiqi.mp3'}),
    knex('words').insert({id: 7, word: 'Trousers', lang: 'english', respelling: '[trou-zerz]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462765416/trousers_bvkuya.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758133/Trousers_fikjy2.m4a'}),
    knex('words').insert({id: 8, word: 'Car', lang: 'english', respelling: '[kahr]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462765385/car1_o0hke6.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758189/Car_ejzqh4.mp3'}),
    knex('words').insert({id: 9, word: 'Monkey', lang: 'english', respelling: '[muhng-kee]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938195/monkey_j9x9lu.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758176/Monkey_kztpes.mp3'}),
    knex('words').insert({id: 10, word: 'World', lang: 'english', respelling: '[wurld]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/world_evfhco.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758127/World_ptt0rc.mp3'}),
    knex('words').insert({id: 11, word: 'Supermarket', lang: 'english', respelling: '[soo-per-mahr-kit]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771533/Supermarket_akdrz4.mp3'}),
    knex('words').insert({id: 12, word: 'Mountain', lang: 'english', respelling: '[moun-tn]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/mountain_plhvz1.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758169/Mountain_zvcglp.mp3'}),
    knex('words').insert({id: 13, word: 'Tree', lang: 'english', respelling: '[tree]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/tree_wigvrz.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758138/Tree_ccu6ai.mp3'}),
    knex('words').insert({id: 14, word: 'Bird', lang: 'english', respelling: '[burd]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938221/bird_exxn0n.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771724/Bird_n1ndse.mp3'}),
    knex('words').insert({id: 15, word: 'Cabbage', lang: 'english', respelling: '[kab-ij]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426170/cabbage_xrgz2t.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462758203/Cabbage_h79jr0.mp3'}),
    knex('words').insert({id: 16, word: 'Rhubarb', lang: 'english', respelling: '[roo-bahrb]', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771770/Rhubarb_edm7qy.mp3'}),
    knex('words').insert({id: 17, word: 'Problem', lang: 'english', respelling: '[prob-luh m]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/problem_jakqir.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771776/Problem_vx8yju.mp3'}),
    knex('words').insert({id: 18, word: 'Hand', lang: 'english', respelling: '[hand]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426161/hand_qplean.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462771783/Hand_oiyifg.mp3'}),
    knex('words').insert({id: 19, word: 'Place', lang: 'english', respelling: '[pleys]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938241/place_emw6of.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462773156/Place_qys0zl.mp3'}),
    knex('words').insert({id: 20, word: 'Bread', lang: 'english', respelling: '[bred]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/bread_ivbexa.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462773171/Bread_bpgpie.mp3'}),



    knex('words').insert({id: 21, word: 'Personne', lang: 'french', respelling: '[pɛʀsɔn]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257129/person_unrt8r.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462937851/Personne_feey2x.mp3'}),
    knex('words').insert({id: 22, word: 'Poisson', lang: 'french', respelling: '[pwasɔ̃]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462257138/time_ftrh4u.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922817/Poisson_ia11x7.mp3'}),
    knex('words').insert({id: 23, word: 'Soleil', lang: 'french', respelling: '[sɔlɛj]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416648/sun_ayk1jz.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922850/Soleil_k3vwo5.mp3'}),
    knex('words').insert({id: 24, word: 'Fromage', lang: 'french', respelling: '[fʀɔmaʒ]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462416510/cheese_rof8dr.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922784/Fromage_swcylb.mp3'}),
    knex('words').insert({id: 25, word: 'Chose', lang: 'french', respelling: '[ʃoz]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462922490/thing_3_mx9inz.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922776/Chose_i8bjne.mp3'}),
    knex('words').insert({id: 26, word: 'Pantalon', lang: 'french', respelling: '[pɑ̃talɔ̃]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462765416/trousers_bvkuya.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922810/Pantalon_r3crzz.mp3'}),
    knex('words').insert({id: 27, word: 'Voiture', lang: 'french', respelling: '[vwatyʀ]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462765385/car1_o0hke6.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922857/Voiture_xfqfpj.mp3'}),
    knex('words').insert({id: 28, word: 'Singe', lang: 'french', respelling: '[sɛ̃ʒ]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938195/monkey_j9x9lu.png' , sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922829/Singe_zkviba.mp3'}),
    knex('words').insert({id: 29, word: 'Monde', lang: 'french', respelling: '[mɔ̃d]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/world_evfhco.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922792/Monde_hgk4xs.mp3'}),
    knex('words').insert({id: 30, word: 'Supermarché', lang: 'french', respelling: '[sypɛʀmaʀʃe]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938232/supermarket_sc9eqb.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462931827/Supermarche%CC%81_l1ldbd.mp3' }),
    knex('words').insert({id: 31, word: 'Montagne', lang: 'french', respelling: '[mɔ̃taɲ]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/mountain_plhvz1.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922798/Montagne_jd3euj.mp3'}),
    knex('words').insert({id: 32, word: 'Arbre', lang: 'french', respelling: '[aʀbʀ]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/tree_wigvrz.png',sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922764/Arbre_bd1isr.mp3'}),
    knex('words').insert({id: 33, word: 'Oiseau', lang: 'french', respelling: '[wazo]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938221/bird_exxn0n.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922802/Oiseau_hkadsn.mp3'}),
    knex('words').insert({id: 34, word: 'Problème', lang: 'french', respelling: '[pʀɔblɛm]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/problem_jakqir.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922824/Proble%CC%80me_xrbmm4.mp3'}),
    knex('words').insert({id: 35, word: 'Main', lang: 'french', respelling: '[mɛ̃]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462426161/hand_qplean.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922788/Mains_ngvumg.m4a'}),
    knex('words').insert({id: 36, word: 'Endroit', lang: 'french', respelling: '[ɑ̃dʀwa]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938241/place_emw6of.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922781/Endroit_lqwsti.mp3'}),
    knex('words').insert({id: 37, word: 'Pain', lang: 'french', respelling: '[pɛ̃]', image_url: 'http://res.cloudinary.com/ddoenlcwx/image/upload/v1462938222/bread_ivbexa.png', sound_url: 'http://res.cloudinary.com/ddoenlcwx/video/upload/v1462922805/Pain_uuiezl.mp3'})
  );
};
