/* exported Asset */
/* global Media */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load = function(){
    var asset    = {},
        img      = null,
        imgUrls  = [
          'img/red.png',
          'img/yellow.png',
          'img/blue.png',
          'img/purple.png',
          'img/orange.png',
          'img/green.png',
          'img/yellow-orange.png',
          'img/yellow-green.png',
          'img/red-orange.png',
          'img/red-purple.png',
          'img/blue-purple.png',
          'img/blue-green.png'
        ];

    asset.drops = [];

    imgUrls.forEach(function(url){
      img = new Image();
      img.src = url;
      asset.drops.push(img);
    });

    asset.bloop  = new Media();
    asset.bloop.src  = 'audio/bloop.mp3';

    asset.splat = new Media();
    asset.splat.src = 'audio/splat.mp3';

    return asset;
  };

  return Asset;
})();
