Player.Router = Backbone.Router.extend({

  routes: {
    '' : 'home'
  },


  initialize: function(){
    this.player = new Player.Models.Player();
  },

  home: function(){
    var libraryView = new Player.Views.LibraryView({
      el: '.library'
    });

    var playlistView = new Player.Views.PlayerlistView({
      el: '.playlist',
      collection: this.player.playlist
    });

  }

});
