/* global Game */

(function(){
  'use strict';

  angular.module('chromagic')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    var game  = null;
    // game = new Game();
    $scope.deviceReady = false;
    $scope.showStart = true;
    $scope.showGame = false;
    $scope.showEnd = false;
    $scope.showLevel = false;

    document.addEventListener('deviceready', function(){
      screen.lockOrientation('landscape');
      $scope.deviceReady = true;
    });

    window.addEventListener('levelup', function(){
      $scope.showGame  = !$scope.showGame;
      $scope.showLevel = !$scope.showLevel;
    });

    window.addEventListener('gameover', function(){
      $scope.showGame = !$scope.showGame;
      $scope.showEnd  = !$scope.showEnd;
    });

    $scope.gameStart = function(lives, level, score){
      if(!$scope.game){$scope.game = new Game();}
      $scope.showStart = !$scope.showStart;
      $scope.showGame  = !$scope.showGame;
      $scope.game.start(lives, level, score);
    };

    $scope.updateBar = function(num){
      $scope.game.bar.changeColor(num);
    };

    $scope.done = function(){
      $scope.showStart = !$scope.showStart;
      $scope.showEnd  = !$scope.showEnd;
    };

  }]);
})();
