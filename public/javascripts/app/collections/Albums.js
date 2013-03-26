define(['Backbone',
        'app/models/Album'
],function(Backbone, Album){

  var Albums = Backbone.Collection.extend({
    url: 'albums',
    model: Album
  });

  return Albums;
});
