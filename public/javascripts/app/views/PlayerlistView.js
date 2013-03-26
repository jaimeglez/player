define(['Backbone',
        'app/views/AlbumView'
],function(Backbone, AlbumView){
  var PlayerlistView = Backbone.View.extend({

    events: {
      'click .play'  : 'play',
      'click .pause' : 'stop',
      'click .next'  : 'next',
      'click .prev'  : 'prev'
    },

    initialize: function(){
      this.collection.on('add', this.showAlbum, this);
      this.model.on('change:state', this.update, this);
      this.model.on('change:currentTrack', this.play, this);

      this.$('.pause').hide();
    },

    update: function(){
      var method = this[this.model.get('state')];
      method.call(this);
    },

    showAlbum: function(model, collection){
      var albumView = new AlbumView({
        model: model,
        player: this.model
      });

      this.$el.append(albumView.el);
    },

    audio: new Audio(),

    play: function(){
      var ready = this.model.play();
      this.$('.current').removeClass('current');

      if(ready){
        var currentAlbum = this.model.get('currentAlbum');
        var currentTrack = this.model.get('currentTrack');

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
      this.model.pause();

      this.audio.pause();
      this.$('.play').show();
      this.$('.pause').hide();
    },

    next: function(){
      this.model.next();
      this.play();
    },

    prev: function(){
      this.model.prev();
      this.play();
    }
  });

  return PlayerlistView;
});
