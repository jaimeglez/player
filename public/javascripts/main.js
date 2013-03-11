//Create our ALbum model
var Album = Backbone.Model.extend({
  url: 'album'
});

// new album
var album = new Album();

$(function(){

  var AlbumView = Backbone.View.extend({

    className: 'album',

    initialize: function(){
      this.template = _.template($('#album-template').html());
      this.model.on('change', this.render, this).fetch();
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
    }

  });


  var LibraryView = Backbone.View.extend({
    initialize: function(){

      this.albumView = new AlbumView({
        model: album
      });

      this.render();
    },

    render: function(){
      this.$el.append(this.albumView.el);
    }
  });


  var Router = Backbone.Router.extend({

    routes: {
      '' : 'home'
    },

    home: function(){
      var libraryView = new LibraryView({
        el: '.library'
      });
    }

  });

  var router = new Router();
  Backbone.history.start();

});
