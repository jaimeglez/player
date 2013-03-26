define(['Backbone', 
       'app/models/player',
       'app/views/LibraryView',
       'app/views/PlayerlistView'
], function(Backbone, Player, LibraryView, PlayerlistView){

  var Router = Backbone.Router.extend({

    routes: {
      '' : 'home'
    },


    initialize: function(){
      this.player = new Player();
    },

    home: function(){
      var libraryView = new LibraryView({
        el: '.library',
        player: this.player 
      });

      var playlistView = new PlayerlistView({
        el: '.playlist',
        collection: this.player.playlist,
        model: this.player
      });

    }

  });

  return{
    initialize: function(){
      var router = new Router();
      Backbone.history.start(true);
    }
  };

});

