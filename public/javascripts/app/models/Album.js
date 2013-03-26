define(['Backbone'], function(Backbone){

  var Album = Backbone.Model.extend({
    url: 'album',

    getTitle: function(){
      console.log('Title: ', this.get('title'));
    }
  });

  return Album;
});
