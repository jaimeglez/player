var Player = {
  Models: {},
  Collections: {},
  Views: {},

  initialize: function(){
    var router = new Player.Router();
    Backbone.history.start();
  }
};


$(function(){
  Player.initialize();
});
