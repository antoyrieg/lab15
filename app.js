
(function() { // <-- It's an IIFE
var app = angular.module("madLibs", ["ngRoute"]); // create the module
  app.config(function($routeProvider) {
     $routeProvider.when('/form', {
       controller: 'makeStoryController',
       templateUrl:'form.html'
     })

     $routeProvider.when('/story', {
       controller: 'displayStoryController',
       templateUrl:'story.html'
     })
     $routeProvider.otherwise({
      templateURL: "form.html"
    })
  });

})();
