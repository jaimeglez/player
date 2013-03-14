Player.Router = Backbone.Router.extend({

  routes: {
    '' : 'home'
  },

  home: function(){
    var libraryView = new Player.Views.LibraryView({
      el: '.library'
    });

    var playlistView = new Player.Views.PlayerlistView({
      el: '.playlist'
    });

  }

});
