(function() {
  'use strict';

  angular
  .module('messages', ['theApp'])
  .controller('messagesController', messagesController);

  messagesController.$inject = ['$scope'];

  function messagesController($scope) {
    $scope.chats = [];
    $scope.getRecentMessages = getRecentMessages;


  }

})();