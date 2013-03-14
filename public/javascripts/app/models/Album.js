Player.Models.Album = Backbone.Model.extend({
  url: 'album',

  getTitle: function(){
    console.log('Title: ', this.get('title'));
  }
});
