Player.Views.PlayerlistView = Backbone.View.extend({

  events: {
    'click .play' : 'play',
    'click .pause' : 'pause'
  },

  initialize: function(){
    this.collection.on('add', this.showAlbum, this);
    this.$('.pause').hide();
  },

  showAlbum: function(model, collection){
    var albumView = new Player.Views.AlbumView({
      model: model
    });

    this.$el.append(albumView.el);
  },

  audio: new Audio(),

  play: function(){

    var albums = this.collection.length;
    if(albums > 0 ){

      _.each(this.$('.album'), function(album, index){
        if(index === Player.player.get('currentAlbum')){
          $(album).addClass('current');
        }

      }, this);

      _.each(this.$('.tracks li'), function(track, index){

        if(index === Player.player.get('currentTrack')){
          var song = this.collection.at(index);
          var src  = song.get('tracks')[index].url;
          $(track).addClass('current');


          if(this.audio.src === ''){
            this.audio.src = src;
          }

          this.audio.play();

          this.$('.play').hide();
          this.$('.pause').show();
        }

      }, this);

    }
  },

  pause: function(){
    this.audio.pause();
    this.$('.play').show();
    this.$('.pause').hide();
  }
});
