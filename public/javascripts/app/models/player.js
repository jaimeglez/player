define(['Backbone',
       'app/collections/Albums'
], function(Backbone, Albums){

  var Player = Backbone.Model.extend({
    defaults: {
      'currentAlbum': 0,
      'currentTrack': 0,
      'state' : 'stop'
    },

    initialize: function(){
      this.playlist = new Albums();
    },

    play: function(){
      return this.playlist.length > 0 ? !!(this.set({state: 'play'})) : false;
    },

    pause: function(){
      this.set({state: 'stop'});
    },

    next: function(){
      var album = this.playlist.at(this.get('currentAlbum'));
      var currentTrack = this.get('currentTrack') + 1;

      var nextTrack = album.get('tracks')[currentTrack] ? true : false;

      if(nextTrack){
        this.set({
          currentTrack: currentTrack
        });
      }else{

        var nextAlbum = this.playlist.at(this.get('currentAlbum') + 1);

        if(nextAlbum){
          this.set({
            currentAlbum: this.get('currentAlbum') + 1,
            currentTrack: 0
          });
        }

      }

    },

    prev: function(){
      var currentTrack = this.get('currentTrack') - 1;

      if(currentTrack >= 0){
        this.set({
          currentTrack: currentTrack
        });
      } else {
        var currentAlbum = this.get('currentAlbum') - 1;
        var prevAlbum = this.playlist.at(currentAlbum);

        if(prevAlbum){
          this.set({
            currentAlbum: currentAlbum,
            currentTrack: prevAlbum.get('tracks').length - 1
          });
        }

      }

    }
  });

  return Player;
});

