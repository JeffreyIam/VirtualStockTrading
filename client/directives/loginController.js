(function() {
  'use strict';

  angular
  .module('login', ['theApp'])
  .controller('loginController', loginController);

  loginController.$inject = ['$scope','$http','$window', '$location'];

  function loginController($scope, $http, $window, $location) {
    $scope.login = login;

    function login(user,pw) {
      $http({
        method:'POST',
        url: '/login',
        data: {username: user, password: pw}
      })
      .then(function (resp) {
        if(resp.data.token) {
          $window.sessionStorage.setItem('token', resp.data.token);
          $window.localStorage.setItem('token', resp.data.token);
          $window.localStorage.setItem('userId', resp.data.id)
          $window.localStorage.setItem('email', resp.data.email);
          $scope.id = $window.localStorage.getItem('userId');
          $location.path('/dashboard');
        } else {
          $location.path('/');
        }
      })
    }
  }
})();