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
          'img/droplets/red.png',
          'img/droplets/yellow.png',
          'img/droplets/blue.png',
          'img/droplets/purple.png',
          'img/droplets/orange.png',
          'img/droplets/green.png',
          'img/droplets/yellow-orange.png',
          'img/droplets/yellow-green.png',
          'img/droplets/red-orange.png',
          'img/droplets/red-purple.png',
          'img/droplets/blue-purple.png',
          'img/droplets/blue-green.png'
        ];

    asset.drops = [];

    imgUrls.forEach(function(url){
      img = new Image();
      img.src = url;
      asset.drops.push(img);
    });

    asset.bloop     = new Media();
    asset.bloop.src = 'audio/bloop.mp3';
    asset.splat     = new Media();
    asset.splat.src = 'audio/splat.mp3';

    return asset;
  };

  return Asset;
})();
