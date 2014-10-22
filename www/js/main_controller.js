/* global Game */

(function(){
  'use strict';

  angular.module('chromagic')
  .controller('MainCtrl', ['$scope', '$interval', '$cordovaSocialSharing', function($scope, $interval, $cordovaSocialSharing){
    var game  = null;
    // game = new Game();
    document.addEventListener('deviceready', function(){
      game = new Game();
    });

    $scope.gameStart = function(){
      game.start();
    };

  }]);
})();
