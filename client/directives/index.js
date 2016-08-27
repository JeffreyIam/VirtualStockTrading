(function() {
  'use strict';

  angular
    .module('theApp',['ngRoute'])
    .controller('mainController', mainController)
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
        // controller: 'mainPageController'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html'
      })
      .when('/watchlist', {
        templateUrl: 'views/watchlist.html'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html'
      })
    }

    mainController.$inject = ['$scope']

    function mainController($scope) {
      // $scope.message = message;

      $scope.message = 'hey';
    }

})();