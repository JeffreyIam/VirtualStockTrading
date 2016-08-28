(function() {
  'use strict';

  angular
  .module('signup',['theApp'])
  .controller('signupController', signupController);

  signupController.$inject = ['$scope','$http','$window'];

  function signupController($scope,$http,$window) {
    $scope.signup = signup;

    function signup(first,last,email,user,pass) {
      $http({
        method:'POST',
        url: '/signup',
        data: {
          firstname: first,
          lastname: last,
          email: email,
          username: user,
          password: pass
        }
      });
          $window.location.href = '#/login'
    }
  }

})();