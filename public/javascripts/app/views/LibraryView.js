define(['Backbone',
        'app/collections/Albums',
        'app/views/AlbumView'
],function(Backbone, Albums, AlbumView){
  var LibraryView = Backbone.View.extend({

    collection: new Albums(),

    initialize: function(){
      this.collection.on('reset', this.render, this).fetch();
    },

    render: function(){

      _.each(this.collection.models, function(model){
        var albumView = new AlbumView({
          model: model,
          player: this.options.player
        });

        this.$el.append(albumView.el);
      } ,this);

    }
  });

  return LibraryView;
});
