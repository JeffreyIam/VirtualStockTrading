(function() {
  'use strict';

  angular
  .module('signup',['theApp'])
  .controller('signupController', signupController);

  signupController.$inject = ['$scope','$http'];

  function signupController($scope,$http) {
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
    }
  }



})();