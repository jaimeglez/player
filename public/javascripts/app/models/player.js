Player.Models.Player = Backbone.Model.extend({
  defaults: {
    'currentAlbum': 0,
    'currentTrack': 0,
    'state' : 'stop'
  },

  initialize: function(){
    this.playlist = new Player.Collections.Albums();
  },

  play: function(){
    var Album = this.get('currentAlbum');
    console.log(Album);
  }
});
