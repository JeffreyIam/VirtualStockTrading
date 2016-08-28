(function() {
  'use strict';

  angular
  .module('watchlist',['theApp'])
  .controller('watchlistController', watchlistController);

  watchlistController.$inject = ['$scope','$http','$window'];

  function watchlistController($scope,$http,$window) {
    $scope.getstock = getstock;


    function getstock(ticker) {
      $http({
        method:'POST',
        url: '/watchlist/',
        data: {symbol: ticker}
      })
      .then(function (resp){
        debugger;
        $scope.symbol = resp.data.symbol
        $scope.open = resp.data.open
        $scope.high = resp.data.high
        $scope.low = resp.data.low
        $scope.close = resp.data.close
        $scope.price = resp.data.price

      })
    }
  }

})();

