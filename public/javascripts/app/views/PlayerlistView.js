Player.Views.PlayerlistView = Backbone.View.extend({

  events: {
    'click .play'  : 'play',
    'click .pause' : 'stop',
    'click .next'  : 'next',
    'click .prev'  : 'prev'
  },

  initialize: function(){
    this.collection.on('add', this.showAlbum, this);
    Player.router.player.on('change:state', this.update, this);
    Player.router.player.on('change:currentTrack', this.play, this);

    this.$('.pause').hide();
  },

  update: function(){
    var method = this[Player.router.player.get('state')];
    method.call(this);
  },

  showAlbum: function(model, collection){
    var albumView = new Player.Views.AlbumView({
      model: model
    });

    this.$el.append(albumView.el);
  },

  audio: new Audio(),

  play: function(){
    var ready = Player.router.player.play();
    this.$('.current').removeClass('current');

    if(ready){
      var currentAlbum = Player.router.player.get('currentAlbum');
      var currentTrack = Player.router.player.get('currentTrack');

      var $album = this.$('.album:eq('+currentAlbum+')');
      $album.addClass('current');

      var $track = this.$('.current li:eq('+currentTrack+')');
      $track.addClass('current');

      var tracks = this.collection.at(currentAlbum).get('tracks');

      this.audio.src = tracks[currentTrack].url;
      this.audio.play();

      this.$('.play').hide();
      this.$('.pause').show();
    }else{
      console.warn('Add an album');
    }

  },

  stop: function(){
    Player.router.player.pause();

    this.audio.pause();
    this.$('.play').show();
    this.$('.pause').hide();
  },

  next: function(){
    Player.router.player.next();
    this.play();
  },

  prev: function(){
    Player.router.player.prev();
    this.play();
  }
});
