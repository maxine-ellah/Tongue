
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('words', function(table){
       table.increments('id')
       table.string('word')
       table.string('respelling')
       table.string('image_url')
       table.string('sound_url')
       console.log('words table was created')
     })
 };

 exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('words').then(function(){
     console.log('words table was dropped')
   })
 };
