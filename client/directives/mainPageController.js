(function() {
  'use strict';

  angular
  .module('main', ['theApp'])
  .controller('mainPageController', mainPageController);

  mainPageController.$inject = ['$scope'];

  function mainPageController($scope) {
    $scope.leaguename = 'sample league name';
    $scope.cashBalance = '$1,000,000';
    $scope.userStockValue = '$500,000';
    $scope.totalValue = '$1,500,000'
    $scope.leagueEndDate = '9/1/2016'
  }

})();
