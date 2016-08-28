(function() {
  'use strict';

  angular
    .module('theApp',['watchlist', 'main','login','signup','ngRoute'])
    .config(appConfig);

    appConfig.$inject = ['$routeProvider', '$httpProvider', '$locationProvider']

    function appConfig($routeProvider, $httpProvider, $locationProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/frontPage.html',
        // controller: 'frontPageController'
      })
      .when('/main', {
        templateUrl: 'views/mainPage.html',
        controller: 'mainPageController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signupController'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html'
      })
      .when('/watchlist', {
        templateUrl: 'views/watchlist.html',
        controller: 'watchlistController'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html'
      })
    }

})();