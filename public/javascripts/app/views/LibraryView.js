Player.Views.LibraryView = Backbone.View.extend({

  collection: new Player.Collections.Albums(),

  initialize: function(){
    this.collection.on('reset', this.render, this).fetch();
  },

  render: function(){

    _.each(this.collection.models, function(model){
      var albumView = new Player.Views.AlbumView({
        model: model
      });

      this.$el.append(albumView.el);
    } ,this);

  }
});
