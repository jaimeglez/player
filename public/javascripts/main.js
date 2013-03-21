var Player = {
  Models: {},
  Collections: {},
  Views: {},

  initialize: function(){
    this.router = new Player.Router();
    Backbone.history.start();
  }
};


$(function(){
  Player.initialize();
});
