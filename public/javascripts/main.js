requirejs.config({
  paths: {
    jQuery: 'libs/jquery.loader',
    Underscore: 'libs/underscore.loader',
    Backbone: 'libs/backbone.loader'
  },

  shim: {
    'Backbone': {
      deps: ['jQuery', 'Underscore']
    }
  }

});

define(['jQuery' ,'router'], function($, router){

  $(function(){
    router.initialize();
  });

});
