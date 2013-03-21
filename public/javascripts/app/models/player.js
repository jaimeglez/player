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
    return this.playlist.length > 0 ? !!(this.set({state: 'play'})) : false;
  },

  pause: function(){
    this.set({state: 'stop'});
  },

  next: function(){
    var currentTrack = this.get('currentTrack') + 1;
    this.set({
      currentTrack: currentTrack
    });
  },

  prev: function(){
    var currentTrack = this.get('currentTrack') - 1;
    this.set({
      currentTrack: currentTrack
    });
  }

});
