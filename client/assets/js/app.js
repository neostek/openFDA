(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
    
    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',
    
    //nvD3 - https://github.com/krispo/angular-nvd3
    'nvd3',
    
    //angularplasmid - http://angularplasmid.vixis.com/
    'angularplasmid',
    
    //openFDA API - https://open.fda.gov/
    'restangular'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    });

    //$locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
