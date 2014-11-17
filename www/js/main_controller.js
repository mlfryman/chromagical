/* global Game */

(function(){
  'use strict';

  angular.module('chromagical')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.deviceReady = false;
    $scope.showStart = true;
    $scope.showGame = false;
    $scope.showEnd = false;
    $scope.showLevel = false;

    document.addEventListener('deviceready', function(){
      screen.lockOrientation('landscape', function(){
        $scope.width = window.screen.width;
        $scope.height = window.screen.height;
      });
      $scope.deviceReady = true;
    });

    window.addEventListener('levelup', function(){
      $scope.showGame  = !$scope.showGame;
      $scope.showLevel = !$scope.showLevel;
      $scope.$digest();
      $scope.game.cancelDropTimer();
    });

    window.addEventListener('gameover', function(){
      $scope.game.cancelDropTimer();
      $scope.showGame = !$scope.showGame;
      $scope.showEnd  = !$scope.showEnd;
      $scope.$digest();
      $scope.game.cancelDropTimer();
    });

    $scope.gameStart = function(lives, level, score){
      if(!$scope.deviceReady){return;}
      if(!$scope.game){$scope.game = new Game();}
      $scope.game.assets.magic.play();
      $scope.showStart = !$scope.showStart;
      $scope.showGame  = !$scope.showGame;
      $scope.game.start(lives, level, score);
    };

    $scope.updateBar = function(num){
      $scope.game.bar.changeColor(num);
    };

    $scope.nextLevel = function(lives, level, score){
      $scope.showLevel = !$scope.showLevel;
      $scope.showGame  = !$scope.showGame;
      $scope.game.start(lives, level, score);
    };

    $scope.done = function(){
      $scope.showStart = !$scope.showStart;
      $scope.showEnd  = !$scope.showEnd;
    };
  }]);
})();
