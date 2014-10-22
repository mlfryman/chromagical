(function(){
  'use strict';

  angular.module('chromagic')
  .controller('MainCtrl', ['$scope', '$interval', '$cordovaSocialSharing', function($scope, $interval, $cordovaSocialSharing){

  $cordovaSocialSharing
    .shareViaTwitter(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });

  $cordovaSocialSharing
    .shareViaWhatsApp(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });


  $cordovaSocialSharing
    .shareViaFacebook(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }]);
})();
